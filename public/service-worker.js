// self.addEventListener("install", (event) => {
//     event.waitUntil(
//       caches.open("tea-of-assam-cache").then((cache) => {
//         return cache.addAll([
//           "/",
//           "/index.html",
//           "/src/assets/favicon.svg",
//           "/src/styles/index.css",
//           "/src/main.jsx",
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener("fetch", (event) => {
//     event.respondWith(
//       caches.match(event.request).then((response) => {
//         return response || fetch(event.request);
//       })
//     );
//   });




self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("tea-of-assam-cache").then((cache) => {
      return cache.addAll([
        "/vite-host/",
        "/vite-host/index.html",
        "/vite-host/src/assets/favicon.svg",
        "/vite-host/src/styles/index.css",
        "/vite-host/src/main.jsx",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});