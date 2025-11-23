// =====================================================
//  GUSHIKEN DESIGN — Safe Service Worker for SPA + PWA
// =====================================================

const CACHE_NAME = "gushiken-design-v3";

// ※ index.html はキャッシュしない（SPAが死ぬから）
// ※ / はキャッシュしない（Vite の dev サーバーが死ぬから）
const STATIC_ASSETS = [
  "/offline.html",
  "/manifest.json",

  // Favicons
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

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ===========================
//   Fetch Handler（最重要）
// ===========================
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 外部ドメインは無視
  if (url.origin !== location.origin) return;

  // API はキャッシュしない
  if (req.url.includes("/api/")) return;

  // --------------------------
  // 1) HTML → Network First
  // --------------------------
  // SPA のため index.html のキャッシュは禁止
  if (req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // --------------------------
  // 2) 静的ファイル → Cache First
  // --------------------------
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
