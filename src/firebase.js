import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
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
