let cacheData = "appV1";
let filesToCache = [
  "/",
  "/index.html",
  "/assets/index-UwXm6Axc.js",
  "/vite.svg",
  "/Error.png",
  "/arrow-back.svg",
  "/assets/index-BHbbHmYn.css",
  "/fonts/woff/iranyekanwebextrablackfanum.woff",
  "/fonts/eot/iranyekanwebboldfanum.eot",
  "/fonts/ttf/iranyekanwebboldfanum.ttf",
  "/fonts/eot/iranyekanwebthinfanum.eot",
  "/fonts/woff/iranyekanwebboldfanum.woff",
  "/fonts/woff/iranyekanwebthinfanum.woff",
  "/fonts/ttf/iranyekanwebthinfanum.ttf",
  "/fonts/eot/iranyekanwebregularfanum.eot",
  "/fonts/woff/iranyekanwebregularfanum.woff",
  "/fonts/ttf/iranyekanwebregularfanum.ttf",
  "/fonts/eot/iranyekanwebextrablackfanum.eot",
  "/fonts/ttf/iranyekanwebextrablackfanum.ttf",
]; // Define necessary files to cache

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll(filesToCache).then(() => self.skipWaiting());
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
      .catch(() => {
        return new Response("Application is not connected to the internet", {
          status: 404,
          statusText: "Application is not connected to the internet",
        });
      })
  );
});

this.addEventListener("activate", (event) => {
  var cacheWhitelist = ["appV1"]; // Define the active cache
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
