// La version de cache et la liste de précache ci-dessous sont injectées au
// build par le plugin sw-precache de vite.config.js, à partir du contenu
// réel de dist/. En dev (npm run dev), ce fichier n'est pas enregistré
// comme SW (voir main.jsx) donc ce template n'est jamais exécuté tel quel.
const CACHE_NAME = 'm3notes-shell-__BUILD_VERSION__'
const PRECACHE_URLS = __PRECACHE_URLS__

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  // Ne jamais intercepter les requêtes cross-origin (Firestore, Auth,
  // Storage...) : les mettre en cache ici n'aurait pas de sens et ça
  // ralentissait/perturbait le canal temps réel de Firestore.
  if (url.origin !== self.location.origin) return

  event.respondWith(
    caches.match(request).then((cached) => {
      // App shell : servi depuis le cache en premier (rapide, y compris
      // hors-ligne), avec mise à jour silencieuse en arrière-plan si une
      // ressource non précachée doit être récupérée.
      if (cached) return cached

      return fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          }
          return response
        })
        .catch(async () => {
          if (request.mode === 'navigate') {
            const shell = await caches.match(self.registration.scope)
            if (shell) return shell
          }
          throw new Error('network-and-cache-miss')
        })
    })
  )
})
