import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Cerrar menú al hacer clic en un link
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-3xl">🤟</span>
            <span className="text-xl font-bold text-purple-600 hidden sm:block">
              ManosQueHablan
            </span>
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/diccionario" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Diccionario
            </Link>
            <Link to="/lecciones" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Lecciones
            </Link>
            <Link 
              to="/login" 
              className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-purple-50 transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Registrarse
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none"
            aria-label="Menú"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú mobile */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
            >
              🏠 Inicio
            </Link>
            <Link 
              to="/diccionario" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
            >
              📚 Diccionario
            </Link>
            <Link 
              to="/lecciones" 
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
            >
              🎓 Lecciones
            </Link>
            
            <div className="grid grid-cols-2 gap-3 pt-3 px-2">
              <Link 
                to="/login" 
                onClick={closeMenu}
                className="block text-center border-2 border-purple-600 text-purple-600 px-4 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/register" 
                onClick={closeMenu}
                className="block text-center bg-purple-600 text-white px-4 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}