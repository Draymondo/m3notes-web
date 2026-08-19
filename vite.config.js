import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function githubPagesFallback() {
  return {
    name: 'github-pages-fallback',
    writeBundle(options) {
      const outputDir = options.dir || resolve(process.cwd(), 'dist')
      copyFileSync(resolve(outputDir, 'index.html'), resolve(outputDir, '404.html'))
    }
  }
}

export default defineConfig({
  plugins: [react(), githubPagesFallback()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@firebase/firestore')) return 'firebase-firestore'
          if (id.includes('node_modules/@firebase/auth')) return 'firebase-auth'
          if (id.includes('node_modules/@firebase/storage')) return 'firebase-storage'
          if (id.includes('node_modules/@firebase/')) return 'firebase-core'
          if (id.includes('node_modules/react')) return 'react'
          if (id.includes('node_modules/lucide-react')) return 'icons'
        }
      }
    }
  },
  // Change 'm3notes-web' if your repository name is different
  base: '/m3notes-web/',
})
