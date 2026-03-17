const CACHE = 'melin-v1';
const FILES = [
  '/melin-control/melin_panel.html',
  '/melin-control/icon-192.png',
  '/melin-control/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
