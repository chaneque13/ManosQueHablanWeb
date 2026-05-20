import { useState, useEffect } from 'react'

export default function InstallPWA() {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [isInstalled, setIsInstalled] = useState(false)

    useEffect(() => {
        // Detectar si ya está instalada
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true)
        }

        // Guardar evento de instalación
        const handler = (e) => {
            e.preventDefault()
            setDeferredPrompt(e)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => window.removeEventListener('beforeinstallprompt', handler)
    }, [])

    const handleInstall = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            setIsInstalled(true)
            setDeferredPrompt(null)
        }
    }

    if (isInstalled || !deferredPrompt) return null

    return (
        <button
            onClick={handleInstall}
            className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg font-semibold text-sm hover:bg-purple-700 transition-colors z-50 animate-bounce"
        >
            📲 Instalar app
        </button>
    )
}