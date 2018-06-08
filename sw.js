self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('decision_tree').then(function (cache) {
      return cache.addAll([
<<<<<<< HEAD:sw.js
        '/decision_json_editor/',
        '/decision_json_editor/index.html',
        '/decision_json_editor/decision_json_editor.js'
=======
        './',
        './index.html',
        './app.js'
>>>>>>> 7329a19065d59201ebeecd67c5b919362312fc03:src/sw.js
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});