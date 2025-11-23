const CACHE_NAME = "gushiken-design-v1";

const ASSETS = [
  "/", "/index.html", "/offline.html",
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

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return (
        res ||
        fetch(e.request).catch(() => caches.match("/offline.html"))
      );
    })
  );
});
