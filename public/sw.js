// =====================================================
//  GUSHIKEN DESIGN — Service Worker (Production Only)
// =====================================================

const CACHE_NAME = "gushiken-design-v2";

// 注意：Vite のビルド後のパスに依存しない構成
const STABLE_ASSETS = [
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

  // OGP
  "/ogp.png"
];

// -------------------------------------------
// Install
// -------------------------------------------
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STABLE_ASSETS);
    })
  );
  self.skipWaiting();
});

// -------------------------------------------
// Activate
// -------------------------------------------
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// -------------------------------------------
// Fetch
// SPA + Offline 対応
// -------------------------------------------
self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // ✦ 外部ドメインは触らない
  if (url.origin !== location.origin) return;

  // ✦ API はキャッシュしない
  if (request.url.includes("/api/")) return;

  // --------------------------------------------------
  // 1) キャッシュ優先（静的ファイル）
  // --------------------------------------------------
  if (STABLE_ASSETS.includes(url.pathname)) {
    event.respondWith(caches.match(request));
    return;
  }

  // --------------------------------------------------
  // 2) HTML リクエスト → SPA fallback + offline
  // --------------------------------------------------
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // --------------------------------------------------
  // 3) 画像・CSS・JS → Cache first with network fallback
  // --------------------------------------------------
  event.respondWith(
    caches.match(request).then(cacheRes => {
      return (
        cacheRes ||
        fetch(request)
          .then(networkRes => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(request, networkRes.clone());
              return networkRes;
            });
          })
          .catch(() => caches.match("/offline.html"))
      );
    })
  );
});
