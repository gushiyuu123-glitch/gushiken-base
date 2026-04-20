// =====================================================
//  GUSHIKEN DESIGN — Ultra-Stable Service Worker
// =====================================================

const CACHE_PREFIX = "gushiken-design-";
const CACHE_STAMP = "v20260412184417";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_STAMP}`;

const STATIC_ASSETS = [
  "/offline.html",
  "/manifest.json",

  "/favicon-16-v2.png",
  "/favicon-32-v2.png",
  "/favicon-192-v2.png",
  "/favicon-512-v2.png",
  "/apple-touch-icon.png",

  "/ogp-v2.png",
  "/sitemap.xml",
  "/robots.txt",
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
      Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();

  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: "SW_UPDATED", version: CACHE_NAME });
    });
  });
});

// ===========================
// Fetch
// ===========================
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 外部ドメインは対象外
  if (url.origin !== location.origin) return;

  // POST / PUT / DELETE などはキャッシュしない
  if (req.method !== "GET") return;

  // ナビゲーション系HTMLは常にネット優先
  if (
    req.mode === "navigate" ||
    req.headers.get("accept")?.includes("text/html")
  ) {
    event.respondWith(
      fetch(req).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // 静的ファイルは Cache First
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((res) => {
        // 成功レスポンスだけ保存
        if (!res || res.status !== 200 || res.type !== "basic") {
          return res;
        }

        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, resClone);
        });

        return res;
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