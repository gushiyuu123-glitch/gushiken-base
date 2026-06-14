// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker V6
//  - HTML: Network First / no-store
//  - JS/CSS: Network First
//  - Images/Fonts: Cache First
//  - sitemap.xml / robots.txt: Network Only
//  - Fix: Response body is already used
// =====================================================

const CACHE_PREFIX = "gushiken-design-";
const CACHE_STAMP = "v20260614072710"; // ← scripts/bump-sw-stamp.cjs が置換
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_STAMP}`;

const OFFLINE_URL = "/offline.html";

// “絶対に壊したくない静的”だけをプリキャッシュ
// sitemap.xml / robots.txt は常に最新確認したいので入れない
const STATIC_ASSETS = [
  OFFLINE_URL,

  // PWA / Browser
  "/site.webmanifest",
  "/browserconfig.xml",

  // Favicons
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon-48x48.png",
  "/favicon-64x64.png",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/mstile-150x150.png",

  // OGP fallback
  "/ogp-v4.png",
];

// クエリ違いでも拾ってよい安定ファイルだけ
const IGNORE_SEARCH_CACHE_PATHS = new Set([
  "/site.webmanifest",
  "/browserconfig.xml",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon-48x48.png",
  "/favicon-64x64.png",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/mstile-150x150.png",
]);

// 常にネットから取る
const NETWORK_ONLY_PATHS = new Set([
  "/sitemap.xml",
  "/robots.txt",
]);

// ===========================
// Install
// ===========================

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // addAll は1つ失敗で全部落ちるので、1個ずつ握りつぶし
      await Promise.allSettled(
        STATIC_ASSETS.map(async (asset) => {
          try {
            const request = new Request(asset, {
              cache: "reload",
            });

            const response = await fetch(request);

            if (!response || !response.ok) {
              throw new Error(`Bad response: ${response?.status}`);
            }

            await cache.put(asset, response);
          } catch (err) {
            console.warn(`[SW] Failed to cache: ${asset}`, err);
          }
        })
      );
    })()
  );

  self.skipWaiting();
});

// ===========================
// Activate
// ===========================

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();

      const clients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      clients.forEach((client) => {
        client.postMessage({
          type: "SW_UPDATED",
          version: CACHE_NAME,
        });
      });
    })()
  );
});

// ===========================
// Helpers
// ===========================

function isNavigationRequest(req) {
  return (
    req.mode === "navigate" ||
    req.headers.get("accept")?.includes("text/html")
  );
}

function isFreshAsset(req, url) {
  return (
    req.destination === "script" ||
    req.destination === "style" ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css")
  );
}

function isStaticAsset(req, url) {
  return (
    req.destination === "image" ||
    req.destination === "font" ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".xml") ||
    url.pathname.endsWith(".txt") ||
    url.pathname.endsWith(".webmanifest")
  );
}

function shouldIgnoreSearch(url) {
  return IGNORE_SEARCH_CACHE_PATHS.has(url.pathname);
}

/**
 * cachePut: 安定版
 * - clone() を await の前に取る
 * - 失敗してもSWを落とさない
 */
async function cachePut(request, response) {
  try {
    if (!response || response.status !== 200 || response.type !== "basic") {
      return;
    }

    const copy = response.clone();

    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, copy);
  } catch (err) {
    console.warn("[SW] cachePut failed:", err);
  }
}

async function cacheMatchExact(request) {
  return caches.match(request);
}

async function cacheMatchMaybeIgnoreSearch(request, url) {
  const exact = await caches.match(request);
  if (exact) return exact;

  if (!shouldIgnoreSearch(url)) return null;

  return caches.match(request, {
    ignoreSearch: true,
  });
}

async function networkOnly(request) {
  return fetch(request, {
    cache: "no-store",
  });
}

// ===========================
// Fetch
// ===========================

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // GET以外はSWで触らない
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 外部ドメインは対象外
  if (url.origin !== location.origin) return;

  // sitemap / robots は常に最新を取りに行く
  if (NETWORK_ONLY_PATHS.has(url.pathname)) {
    event.respondWith(networkOnly(req));
    return;
  }

  // 1) HTML：常にネット優先
  if (isNavigationRequest(req)) {
    event.respondWith(
      fetch(req, { cache: "no-store" }).catch(async () => {
        const cached = await caches.match(OFFLINE_URL, {
          ignoreSearch: true,
        });

        return cached || new Response("OFFLINE", { status: 503 });
      })
    );
    return;
  }

  // 2) JS / CSS：Network First
  if (isFreshAsset(req, url)) {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req, { cache: "no-store" });
          event.waitUntil(cachePut(req, res));
          return res;
        } catch (err) {
          const cached = await cacheMatchExact(req);
          if (cached) return cached;

          throw err;
        }
      })()
    );
    return;
  }

  // 3) 画像/フォント/manifest等：Cache First
  if (isStaticAsset(req, url)) {
    event.respondWith(
      (async () => {
        const cached = await cacheMatchMaybeIgnoreSearch(req, url);
        if (cached) return cached;

        const res = await fetch(req);
        event.waitUntil(cachePut(req, res));
        return res;
      })()
    );
    return;
  }

  // 4) その他：基本ネット優先
  event.respondWith(
    (async () => {
      try {
        return await fetch(req, { cache: "no-store" });
      } catch (err) {
        const cached = await cacheMatchExact(req);

        return cached || new Response("OFFLINE", { status: 503 });
      }
    })()
  );
});

// ===========================
// Message
// ===========================

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data) return;

  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }

  // デバッグ・緊急用
  if (data.type === "CLEAR_CACHES") {
    event.waitUntil(
      (async () => {
        const keys = await caches.keys();

        await Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX))
            .map((key) => caches.delete(key))
        );

        const clients = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });

        clients.forEach((client) => {
          client.postMessage({
            type: "CACHES_CLEARED",
          });
        });
      })()
    );
    return;
  }

  if (data.type === "GET_VERSION") {
    event.waitUntil(
      (async () => {
        const clients = await self.clients.matchAll({
          type: "window",
          includeUncontrolled: true,
        });

        clients.forEach((client) => {
          client.postMessage({
            type: "SW_VERSION",
            version: CACHE_NAME,
          });
        });
      })()
    );
  }
});