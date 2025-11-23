// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker (No White Screen)
// =====================================================

const CACHE_NAME = "gushiken-design-v4";

// キャッシュする安全なファイルのみ
const STATIC_ASSETS = [
  "/offline.html",
  "/manifest.json",

  "/favicon-16.png",
  "/favicon-32.png",
  "/favicon-48.png",
  "/favicon-96.png",
  "/favicon-180.png",
  "/favicon-192.png",
  "/favicon-256.png",
  "/favicon-512.png",

  "/ogp.png"
];

// ===========================
// Install
// ===========================

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// ===========================
// Activate
// ===========================

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ===========================
// Fetch Handler（最重要）
// ===========================

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 外部ドメインは対象外
  if (url.origin !== location.origin) return;

  // HTML は絶対にキャッシュしない（白画面対策）
  if (req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // その他は Cache First（安全）
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, res.clone());
            return res;
          });
        })
        .catch(() => caches.match("/offline.html"));
    })
  );
});
