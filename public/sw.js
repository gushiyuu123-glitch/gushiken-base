// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker V5 (patched)
//  Fix: "Response body is already used" (cachePut clone timing)
// =====================================================

const CACHE_PREFIX = "gushiken-design-";
const CACHE_STAMP = "v20260601125501"; // ← scripts/bump-sw-stamp.cjs が置換
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_STAMP}`;

const OFFLINE_URL = "/offline.html";

// “絶対に壊したくない静的”だけをプリキャッシュ
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

  // OGP / SEO（常に最新が欲しいが、オフライン時の最低保証にもなる）
  "/ogp-v4.png",
  "/sitemap.xml",
  "/robots.txt",
];

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
            await cache.add(asset);
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

      // クライアントへ更新通知
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
  return req.mode === "navigate" || req.headers.get("accept")?.includes("text/html");
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

/**
 * cachePut: 安定版
 * - clone() を await の前に取る（bodyが消費された後にcloneしない）
 * - 失敗してもSWを落とさない
 */
async function cachePut(request, response) {
  try {
    if (!response || response.status !== 200 || response.type !== "basic") return;

    // ✅ awaitの前にclone（ここが修正の核）
    const copy = response.clone();

    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, copy);
  } catch (err) {
    // SWを壊さない（ログ荒れ防止）
    console.warn("[SW] cachePut failed:", err);
  }
}

async function cacheMatch(request, ignoreSearch = false) {
  return caches.match(request, ignoreSearch ? { ignoreSearch: true } : undefined);
}

// ===========================
// Fetch
// ===========================
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // GET以外はSWで触らない
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 外部ドメインは対象外（microCMS含む）
  if (url.origin !== location.origin) return;

  // 1) HTML：常にネット優先（古いindex.htmlを掴む事故を防ぐ）
  if (isNavigationRequest(req)) {
    event.respondWith(
      fetch(req, { cache: "no-store" }).catch(async () => {
        const cached = await cacheMatch(OFFLINE_URL, true);
        return cached || new Response("OFFLINE", { status: 503 });
      })
    );
    return;
  }

  // 2) JS / CSS：Network First（古いチャンク事故を減らす）
  if (isFreshAsset(req, url)) {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req, { cache: "no-store" });
          event.waitUntil(cachePut(req, res));
          return res;
        } catch (err) {
          const cached = await cacheMatch(req, false); // ハッシュ一致を優先
          if (cached) return cached;
          throw err;
        }
      })()
    );
    return;
  }

  // 3) 画像/フォント/manifest等：Cache First（必要なら裏で補充）
  if (isStaticAsset(req, url)) {
    event.respondWith(
      (async () => {
        // query付きでも拾えるよう ignoreSearch:true（/site.webmanifest?x=... など）
        const cached = await cacheMatch(req, true);
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
        const cached = await cacheMatch(req, false);
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
        await Promise.all(keys.filter((k) => k.startsWith(CACHE_PREFIX)).map((k) => caches.delete(k)));
        const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
        clients.forEach((c) => c.postMessage({ type: "CACHES_CLEARED" }));
      })()
    );
    return;
  }

  if (data.type === "GET_VERSION") {
    event.waitUntil(
      (async () => {
        const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
        clients.forEach((c) => c.postMessage({ type: "SW_VERSION", version: CACHE_NAME }));
      })()
    );
  }
});