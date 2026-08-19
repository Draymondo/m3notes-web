const CACHE_NAME = 'm3notes-cache-v1'

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        const response = await fetch(event.request)
          if (response.ok) cache.put(event.request, response.clone())
        return response
      } catch (err) {
        const cached = await cache.match(event.request)
        if (cached) return cached
        if (event.request.mode === 'navigate') {
          const fallback = await cache.match(self.registration.scope)
          if (fallback) return fallback
        }
        throw err
      }
    })
  )
})
