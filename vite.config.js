import { copyFileSync, readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, join, relative, sep } from 'node:path'
import { createHash } from 'node:crypto'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Doit rester cohérent avec `base` plus bas : sert à la fois de chemin
// public et de préfixe pour les URLs précachées par le service worker.
const BASE = '/m3notes-web/'

function githubPagesFallback() {
  return {
    name: 'github-pages-fallback',
    writeBundle(options) {
      const outputDir = options.dir || resolve(process.cwd(), 'dist')
      copyFileSync(resolve(outputDir, 'index.html'), resolve(outputDir, '404.html'))
    }
  }
}

// Génère la liste des fichiers réellement produits par ce build (les noms
// contiennent déjà un hash de contenu grâce à Vite) et l'injecte dans
// dist/sw.js, avec une version de cache dérivée de cette même liste.
// Ainsi, chaque déploiement dont le contenu change invalide proprement
// l'ancien cache du service worker (voir `activate` dans public/sw.js).
function swPrecache() {
  return {
    name: 'sw-precache',
    writeBundle(options) {
      const outputDir = options.dir || resolve(process.cwd(), 'dist')

      function collect(dir, files = []) {
        for (const entry of readdirSync(dir)) {
          const full = join(dir, entry)
          if (statSync(full).isDirectory()) {
            collect(full, files)
          } else if (entry !== 'sw.js' && entry !== '404.html' && !entry.endsWith('.map')) {
            files.push(relative(outputDir, full).split(sep).join('/'))
          }
        }
        return files
      }

      const assetPaths = collect(outputDir).map((f) => BASE + f).sort((a, b) => a.localeCompare(b))
      const precacheUrls = [BASE, ...assetPaths]
      const version = createHash('sha256').update(assetPaths.join(',')).digest('hex').slice(0, 10)

      const template = readFileSync(resolve('public/sw.js'), 'utf-8')
      const output = template
        .replaceAll('__BUILD_VERSION__', version)
        .replaceAll('__PRECACHE_URLS__', JSON.stringify(precacheUrls))

      writeFileSync(resolve(outputDir, 'sw.js'), output)
    }
  }
}

export default defineConfig({
  plugins: [react(), githubPagesFallback(), swPrecache()],
  build: {
    modulePreload: {
      // Firestore n'est chargé qu'à la demande (voir src/firebase.js) :
      // même si Rollup le préchargerait par défaut, on retire ce lien pour
      // éviter de télécharger ~90 Ko (gzip) avant même la connexion.
      resolveDependencies: (_filename, deps) => deps.filter((dep) => !dep.includes('firebase-firestore'))
    },
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
  // Change BASE plus haut si le nom du dépôt est différent
  base: BASE,
})
