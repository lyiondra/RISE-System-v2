import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RISE-System-v2/', // 👈 This MUST have the slashes!
})