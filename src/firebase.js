import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",
  authDomain: "m3notes-9712f.firebaseapp.com",
  projectId: "m3notes-9712f",
  storageBucket: "m3notes-9712f.firebasestorage.app",
  messagingSenderId: "312791889198",
  appId: "1:312791889198:android:defc0d0536797e190bb6bf"
}

const app = initializeApp(firebaseConfig)

// Auth est nécessaire dès le démarrage (savoir si on affiche Login ou Home),
// donc chargé immédiatement.
export const auth = getAuth(app)

// Firestore est beaucoup plus lourd (le plus gros chunk du bundle) et n'est
// utile qu'une fois connecté : on ne le charge qu'à la demande, via
// import() dynamique, au lieu de l'inclure dans le chargement initial.
//
// IMPORTANT : tous les fichiers qui utilisent Firestore doivent récupérer
// aussi bien `db` que les fonctions du SDK (doc, collection, query, ...) via
// getFirestoreCtx() ci-dessous, et ne JAMAIS faire
// `import { ... } from 'firebase/firestore'` en haut de fichier — un seul
// import statique de ce module ailleurs dans l'app suffirait à annuler ce
// chargement paresseux (Vite regrouperait le chunk avec le bundle initial).
let dbLoad = null

function loadFirestore() {
  if (!dbLoad) {
    dbLoad = import('firebase/firestore').then((mod) => {
      const db = mod.getFirestore(app)

      mod.enableIndexedDbPersistence(db).catch((err) => {
        if (err.code === 'failed-precondition') {
          console.warn('Persistence failed: multiple tabs open')
        } else if (err.code === 'unimplemented') {
          console.warn('Persistence not available in this browser')
        }
      })

      // Si on est déjà hors-ligne au moment où Firestore démarre, basculer
      // tout de suite sur le cache local plutôt que d'attendre un timeout
      // réseau.
      if (!navigator.onLine) {
        mod.disableNetwork(db).catch(() => {})
      }

      return { db, mod }
    })
  }
  return dbLoad
}

export function getDb() {
  return loadFirestore().then(({ db }) => db)
}

// Donne accès en un seul appel à `db` + toutes les fonctions du SDK
// Firestore utilisées dans l'app (doc, collection, query, onSnapshot, ...).
export function getFirestoreCtx() {
  return loadFirestore().then(({ db, mod }) => ({ db, ...mod }))
}

// Ces listeners ne déclenchent rien tant que Firestore n'a pas encore été
// chargé (pas de session active) : rien à activer/désactiver dans ce cas.
window.addEventListener('offline', () => {
  dbLoad?.then(({ db, mod }) => mod.disableNetwork(db)).catch(() => {})
})

window.addEventListener('online', () => {
  dbLoad?.then(({ db, mod }) => mod.enableNetwork(db)).catch(() => {})
})
