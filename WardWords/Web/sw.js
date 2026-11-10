const CACHE_NAME = 'wardwords-v1.2';
const CORE = ['./', './index.html', './style.css', './words.js', './app.js', './icon-192.png', './icon-512.png', './manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET')return;
  const requestURL = new URL(event.request.url);
  if(requestURL.origin!==self.location.origin)return;
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
    return response;
  })));
});
