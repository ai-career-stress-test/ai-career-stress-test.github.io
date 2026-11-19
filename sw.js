// Network first, so people always get the latest version; the saved copy keeps the app working offline.
// Only this site's own files are handled. Outside scripts such as analytics go straight to the network.
const CACHE = "acst-v2";
const SHELL = ["./", "index.html", "schools.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "venture-compass/", "venture-compass/index.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })
    .catch(() => caches.match(req, { ignoreSearch: req.mode === "navigate" }).then(m => m || (req.mode === "navigate" ? caches.match("index.html") : Response.error()))));
});
