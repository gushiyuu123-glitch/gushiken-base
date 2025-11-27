// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker (No White Screen)
// =====================================================

// Cache naming: use a stable prefix and a deployment stamp so older caches are
// reliably removed. Bump this stamp on deploy to force clients to refresh.
const CACHE_PREFIX = "gushiken-design-";
const CACHE_STAMP = "v20251126203330"; // bump this value on deploy (e.g. v6, v7...) or include timestamp
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_STAMP}`;

// キャッシュする安全なファイルのみ（public にある実際のファイルに合わせる）
const STATIC_ASSETS = [
  "/offline.html",
  "/manifest.json",

  "/favicon-16.png",
  "/favicon-32.png",
  "/favicon-48.png",
  "/favicon-64.png",
  "/favicon-96.png",
  "/favicon-128.png",
  "/favicon-192.png",
  "/favicon-256.png",
  "/favicon-512.png",

  "/ogp.png",
  "/sitemap.xml",
  "/robots.txt"
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
  // Remove any caches that don't match the current cache prefix + stamp.
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME && !k.startsWith(CACHE_PREFIX))
          .map((k) => caches.delete(k))
      )
    )
  );

  // Also remove caches that share the prefix but are stale (different stamp)
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );

  self.clients.claim();

  // notify clients that a new SW has taken control
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
    });
  });
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

// Allow the page to instruct the SW to skip waiting (for immediate activation)
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
