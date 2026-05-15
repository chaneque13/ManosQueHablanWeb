export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🤟</span>
              <span className="text-xl font-bold">ManosQueHablan</span>
            </div>
            <p className="text-gray-400 text-sm">
              Aprendiendo lengua de señas juntos, una seña a la vez.
            </p>
          </div>

          {/* Columna 2 - Explorar */}
          <div>
            <h5 className="font-semibold mb-4">Explorar</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Diccionario</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lecciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categorías</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Columna 3 - Soporte */}
          <div>
            <h5 className="font-semibold mb-4">Soporte</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reportar error</a></li>
            </ul>
          </div>

          {/* Columna 4 - Redes Sociales */}
          <div>
            <h5 className="font-semibold mb-4">Síguenos</h5>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                📱
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                ▶️
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ManosQueHablan. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}