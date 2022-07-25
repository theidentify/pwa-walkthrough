self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('video-store').then(function (cache) {
      return cache.addAll([
        '/index.html',
        '/index.js',
        '/style.css',
        '/images/p1.webp',
        '/images/p2.webp',
        '/images/p3.webp',
        '/images/p4.webp',
        '/images/p5.webp',
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
