// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker V3
//  No White Screen / Favicon V3 / Safe Cache Control
// =====================================================

const CACHE_PREFIX = "gushiken-design-";
const CACHE_STAMP = "v20260424-favicon-v3";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_STAMP}`;

const STATIC_ASSETS = [
  "/offline.html",

  // PWA / Browser
  "/site.webmanifest",
  "/browserconfig.xml",

  // Favicons V3
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
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  event.waitUntil(self.clients.claim());

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: "SW_UPDATED",
            version: CACHE_NAME,
          });
        });
      })
  );
});

// ===========================
// Fetch
// ===========================
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // POST / PUT / DELETE などはキャッシュしない
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 外部ドメインは対象外
  if (url.origin !== location.origin) return;

  // ナビゲーション系HTMLは常にネット優先
  // 古いHTMLをキャッシュして白画面になる事故を防ぐ
  if (
    req.mode === "navigate" ||
    req.headers.get("accept")?.includes("text/html")
  ) {
    event.respondWith(
      fetch(req, { cache: "no-store" }).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // 静的ファイルは Cache First
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((res) => {
          // 成功レスポンスだけ保存
          if (!res || res.status !== 200 || res.type !== "basic") {
            return res;
          }

          const resClone = res.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, resClone);
          });

          return res;
        })
        .catch(() => {
          // HTML以外に offline.html を返すと画像/JS/CSS事故になるので返さない
          return caches.match(req);
        });
    })
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