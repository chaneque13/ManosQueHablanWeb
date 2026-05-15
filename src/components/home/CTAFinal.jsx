import { Link } from 'react-router-dom'

export default function CTAFinal() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para comunicarte sin barreras?
        </h2>
        <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
          Únete a miles de personas que ya están aprendiendo lengua de señas. 
          Empieza hoy y descubre un nuevo mundo de comunicación.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Comienza Hoy — Es Gratis
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-200">
          ✨ No necesitas experiencia previa • Aprende a tu ritmo • 100% gratis
        </p>
      </div>
    </section>
  )
}