
 const CACHE_NAME = 'version-2'

 const urlsToCache =['index.html', 'offline.html']

    const self = this
 // installation of sw
    self.addEventListener('install', (event)=>{
        event.waitUntil(
            caches.open(CACHE_NAME)
            .then(cache=>{
                console.log('open cache')
                return cache.addAll(urlsToCache)
            })
        )
    })
 //listen for request

    self.addEventListener('fetch', (event)=>{
        event.respondWith(
            caches.match(event.request)
            .then(()=>{
                // console.log(event.request)
                return fetch(event.request)
                .catch(()=>caches.match('offline.html'))
            })
        )
    })

 //activate the sw

    self.addEventListener('activate', (event)=>{
        const cacheWhitelist =[]
        cacheWhitelist.push(CACHE_NAME)
        event.waitUntil(
            caches.keys()
            .then(keys=>{
                console.log(keys)
                return Promise.all(
                    keys.map(key=>{
                        if(!cacheWhitelist.includes(key)){
                            return caches.delete(key)
                        }
                    })
                    // keys.filter(key=> key !==CACHE_NAME )
                // .map(key=> caches.delete(key))
                )
            })
        )
    })