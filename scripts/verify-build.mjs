import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = [
  'dist/index.html',
  'dist/404.html',
  'dist/manifest.json',
  'dist/sw.js'
]

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    throw new Error(`Missing build artifact: ${file}`)
  }
}

const index = readFileSync('dist/index.html', 'utf8')
const fallback = readFileSync('dist/404.html', 'utf8')

if (!index.includes('/m3notes-web/manifest.json')) {
  throw new Error('The production base path is missing from dist/index.html')
}

if (index !== fallback) {
  throw new Error('dist/404.html must match dist/index.html for GitHub Pages routing')
}

console.log('Build artifacts verified.')
