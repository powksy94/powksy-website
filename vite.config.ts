import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT ?? '4173'),
    allowedHosts: true,
  },
  server: {
    proxy: {
      '/nocturne-api': {
        target: 'https://datingappbackend-production-a9e3.up.railway.app',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/nocturne-api/, ''),
        headers: { origin: 'https://powksy.com' },
      },
    },
  },
})
