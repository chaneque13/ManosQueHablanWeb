import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <span className="text-9xl">🔍</span>
        <h1 className="text-6xl font-bold text-gray-900 mt-6 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          ¡Ups! Esta página no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Volver al inicio
          </Link>
          <Link 
            to="/diccionario" 
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            Ir al diccionario
          </Link>
        </div>
      </div>
    </div>
  )
}