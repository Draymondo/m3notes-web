// La version de cache et la liste de précache ci-dessous sont injectées au
// build par le plugin sw-precache de vite.config.js, à partir du contenu
// réel de dist/. En dev (npm run dev), ce fichier n'est pas enregistré
// comme SW (voir main.jsx) donc ce template n'est jamais exécuté tel quel.
const CACHE_NAME = 'm3notes-shell-314c12f9cb'
const PRECACHE_URLS = ["/m3notes-web/","/m3notes-web/apple-touch-icon.png","/m3notes-web/assets/ConfirmDialog-67BJSDFm.js","/m3notes-web/assets/ConfirmDialog-D3dsECrb.css","/m3notes-web/assets/firebase-auth-tE03Xl5_.js","/m3notes-web/assets/firebase-core-BKVkiGoc.js","/m3notes-web/assets/firebase-firestore-InLXtzGG.js","/m3notes-web/assets/HomePage-BbOJxezu.css","/m3notes-web/assets/HomePage-BOPVvrS3.js","/m3notes-web/assets/icons-CH7nwaa9.js","/m3notes-web/assets/index-COY3aTT2.js","/m3notes-web/assets/index-D3SaMJeK.css","/m3notes-web/assets/LoginPage-Bl6EQU8D.css","/m3notes-web/assets/LoginPage-DX55Atp_.js","/m3notes-web/assets/NotePage-CBd_B4au.css","/m3notes-web/assets/NotePage-CHcgFG7R.js","/m3notes-web/assets/notes-BS6-q8mT.js","/m3notes-web/assets/react-BuKqQC-W.js","/m3notes-web/assets/VaultNotePage-BMQespiA.js","/m3notes-web/assets/VaultNotePage-DKFkEcYX.css","/m3notes-web/assets/VaultPage-BYN9EeHg.css","/m3notes-web/assets/VaultPage-DsPe6f6n.js","/m3notes-web/favicon.svg","/m3notes-web/icon-192.png","/m3notes-web/icon-512.png","/m3notes-web/index.html","/m3notes-web/manifest.json"]

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
