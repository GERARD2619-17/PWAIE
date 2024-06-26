self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logoredondosintransparencia192x192.png"])
        })
    );
});

self.addEventListener("fetch", e=>{
    console.log(`Intercepting fetch request for: ${e.request.url}`);
});