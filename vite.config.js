import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change 'm3notes-web' if your repository name is different
  base: '/m3notes-web/',
})
