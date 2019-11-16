let doCache = true;

let CACHE_NAME = "Via Trânsito";

let urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        fetch("manifest.json")
          .then(response => {
            response.json();
          })
          .then(assets => {
            const urlsToCache = ["/", assets[""]];
            cache.addAll(urlsToCache);
            console.log("cached");
          });
      })
    );
  }
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});