import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, enableIndexedDbPersistence, enableNetwork, disableNetwork } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",
  authDomain: "m3notes-9712f.firebaseapp.com",
  projectId: "m3notes-9712f",
  storageBucket: "m3notes-9712f.firebasestorage.app",
  messagingSenderId: "312791889198",
  appId: "1:312791889198:android:defc0d0536797e190bb6bf"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Persistence failed: multiple tabs open')
  } else if (err.code === 'unimplemented') {
    console.warn('Persistence not available in this browser')
  }
})

// Proactively tell Firestore to stop trying to reach the server as soon as
// the browser reports we're offline, so reads/writes fall back to the local
// cache immediately instead of waiting on a connection timeout first.
if (!navigator.onLine) {
  disableNetwork(db).catch(() => {})
}

window.addEventListener('offline', () => {
  disableNetwork(db).catch(() => {})
})

window.addEventListener('online', () => {
  enableNetwork(db).catch(() => {})
})
