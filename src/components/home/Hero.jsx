import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 text-white min-h-screen flex items-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Círculos decorativos animados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Contenido */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm border border-white/30">
            🎉 ¡Nueva actualización! +300 señas agregadas
          </span>
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Aprende Lengua de Señas <br />
          <span className="text-yellow-300">a tu ritmo</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          La plataforma más completa para aprender lengua de señas. 
          Lecciones en video, práctica interactiva y seguimiento personalizado.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/register"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Comienza Gratis
          </Link>
          
          <Link
            to="/demo"
            className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all"
          >
            ▶ Ver cómo funciona
          </Link>
        </div>

        {/* Info adicional */}
        <p className="text-sm text-gray-200">
          ✨ Sin tarjeta de crédito • Acceso inmediato • +2,500 señas disponibles
        </p>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}