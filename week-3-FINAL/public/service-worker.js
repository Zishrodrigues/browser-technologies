// const cacheName = 'browsertechnologies-version1';
//
// const cachedFiles = [
//                       'images/contact.png',
//                       'js/client.js',
//                       'css/style.css'
//                     ];
//
// self.addEventListener('install', function(e) {
//   console.log("[service worker] installed");
//
//   caches.open('funda-serverside-app-version2')
//     .then(cache => cache.add('offline'))
//     .then(self.skipWaiting());
//
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log("[Service worker] Caching cacheFiles");
//       return cache.addAll(cachedFiles)
//     })
//   )
// })
//
// self.addEventListener('activate', function(e) {
//   console.log("[service worker] activated");
//
//   // here we will check if the cache is updated (by name) if that is the case we will remove
//   // the old cache and replace it with the new cache
//   e.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(cacheNames.map(function(thisCacheName) {
//         if (thisCacheName !== cacheName) {
//           console.log("[Service worker] Removing cached files from", thisCacheName);
//           return caches.delete(thisCacheName);
//         }
//       }))
//     })
//   )
// })
//
// self.addEventListener('fetch', function(e) {
//   console.log("[service worker] Fetch", e.request);
// })
