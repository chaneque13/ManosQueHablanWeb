// Service Worker básico para funcionamiento offline
const CACHE_NAME = 'manosquehablan-v1'

const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.webmanifest'
]

// Instalar Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    )
})

// Activar y limpiar cachés viejas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        })
    )
})

// Estrategia: Network First, fallback a caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Guardar en caché
                const responseClone = response.clone()
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone)
                })
                return response
            })
            .catch(() => {
                return caches.match(event.request)
            })
    )
})