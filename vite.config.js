import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.js.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Force the app to load from the root directory
  base: '/', 
  
  // 2. Optional: Ensure the build folder is always named 'dist'
  build: {
    outDir: 'dist',
  }
})