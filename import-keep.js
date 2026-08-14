import fs from 'fs'
import path from 'path'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// === CONFIG FIREBASE (même que ton site) ===
const firebaseConfig = {
  apiKey: "AIzaSyDpQwgOOINjgGCR8NXPMfsDPVwXLPhn67c",
  authDomain: "m3notes-9712f.firebaseapp.com",
  projectId: "m3notes-9712f",
  storageBucket: "m3notes-9712f.firebasestorage.app",
  messagingSenderId: "312791889198",
  appId: "1:312791889198:android:defc0d0536797e190bb6bf"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// === CHEMIN VERS TES NOTES KEEP ===
const KEEP_DIR = path.join(
  process.env.HOME,
  'storage/shared/Download/takeout-20260814T010417Z-1-001/Takeout/Keep'
)

// === TES IDENTIFIANTS M3NOTES ===
const EMAIL = 'djadooraymond@gmail.comd'      // ← change ici
const PASSWORD = 'Djadoo0102053893'        // ← change ici

const colorMap = {
  DEFAULT: 'DEFAULT',
  RED: 'RED',
  ORANGE: 'ORANGE',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
  TEAL: 'TEAL',
  BLUE: 'BLUE',
  CERULEAN: 'DARK_BLUE',
  PURPLE: 'PURPLE',
  PINK: 'PINK',
  BROWN: 'BROWN',
  GRAY: 'GRAY'
}

async function main() {
  console.log('Connexion...')
  await signInWithEmailAndPassword(auth, EMAIL, PASSWORD)
  const userId = auth.currentUser.uid
  console.log('Connecté →', userId)

  const files = fs.readdirSync(KEEP_DIR).filter(f => f.endsWith('.json'))
  console.log(`${files.length} notes trouvées`)

  let imported = 0

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(KEEP_DIR, file), 'utf8')
      const note = JSON.parse(raw)

      if (note.isTrashed) continue

      const title = note.title || ''
      const content = note.textContent || ''
      const isChecklist = Array.isArray(note.listContent) && note.listContent.length > 0

      const checklist = isChecklist
        ? note.listContent.map((item, i) => ({
            id: String(i),
            text: item.text || '',
            isChecked: !!item.isChecked
          }))
        : []

      const labels = (note.labels || []).map(l => l.name).filter(Boolean)

      const data = {
        title,
        content: isChecklist ? '' : content,
        isChecklist,
        checklist,
        color: colorMap[note.color] || 'DEFAULT',
        labels,
        isPinned: !!note.isPinned,
        isArchived: !!note.isArchived,
        imageUrls: [],
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }

      await addDoc(collection(db, 'notes'), data)
      imported++
      console.log(`✓ ${title || file}`)
    } catch (err) {
      console.error(`Erreur sur ${file}:`, err.message)
    }
  }

  console.log(`\nTerminé : ${imported} notes importées`)
  process.exit(0)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
