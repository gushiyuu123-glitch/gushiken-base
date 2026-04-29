// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker V4
//  PWA Safe / No White Screen / Fresh JS / Safe Cache
// =====================================================

const CACHE_PREFIX = "gushiken-design-";
const CACHE_STAMP = "v20260429210748";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_STAMP}`;

const STATIC_ASSETS = [
  "/offline.html",

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

  // OGP / SEO
  "/ogp-v3.png",
  "/sitemap.xml",
  "/robots.txt",
];

// ===========================
// Install
// ===========================
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        STATIC_ASSETS.map((asset) =>
          cache.add(asset).catch((error) => {
            console.warn(`[SW] Failed to cache: ${asset}`, error);
          })
        )
      );
    })
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

// ===========================
// Fetch
// ===========================
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // GET以外はキャッシュしない
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // microCMS / 外部API / 外部ドメインはService Worker対象外
  if (url.origin !== location.origin) {
    return;
  }

  // HTMLは常にネット優先
  // PWAで古いindex.htmlを掴んで白画面・古いJS参照になる事故を防ぐ
  if (isNavigationRequest(req)) {
    event.respondWith(
      fetch(req, { cache: "no-store" }).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // JS / CSS は Network First
  // ホーム画面追加アプリで古いJSチャンクを掴む事故を減らす
  if (isFreshAsset(req, url)) {
    event.respondWith(
      fetch(req, { cache: "no-store" })
        .then((res) => {
          if (!res || res.status !== 200 || res.type !== "basic") {
            return res;
          }

          const clone = res.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, clone);
          });

          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // 画像・フォント・faviconなどは Cache First
  if (isStaticAsset(req, url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;

        return fetch(req).then((res) => {
          if (!res || res.status !== 200 || res.type !== "basic") {
            return res;
          }

          const clone = res.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, clone);
          });

          return res;
        });
      })
    );
    return;
  }

  // その他は基本ネット優先
  event.respondWith(
    fetch(req, { cache: "no-store" }).catch(() => caches.match(req))
  );
});

// ===========================
// Message
// ===========================
self.addEventListener("message", (event) => {
  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});