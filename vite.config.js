import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        globIgnores: ['**/images/pwa*.png']
      },
      includeAssets: ['images/pwa64x64.png', 'images/pwa192x192.png', 'images/pwa512x512.png'],
      manifest: {
        name: 'Manos Que Hablan',
        short_name: 'ManosHablan',
        description: 'Aprende Lengua de Señas a tu ritmo',
        theme_color: '#6C5CE7',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        lang: 'es-MX',
        icons: [
          {
            src: '/images/pwa64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/images/pwa192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/pwa512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/images/pwa512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  preview: {
    allowedHosts: ['manosquehablanweb.onrender.com']
  }
})