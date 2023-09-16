const cacheName = "v1";

const cachedAssets = ["index.html", "themes.css", "theme.js", "jonkapwa.webmanifest", "particles.min.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                cache.addAll(cachedAssets);
            })
            .then(() => self.skipWaiting())
    );
});
self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
self.addEventListener("fetch", (e) => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});