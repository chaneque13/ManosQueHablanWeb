import { Link } from 'react-router-dom'

export default function Categories() {
  const categories = [
    { name: "Saludos", icon: "👋", count: 42, color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
    { name: "Familia", icon: "👨‍👩‍👧‍👦", count: 38, color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
    { name: "Comida", icon: "🍎", count: 65, color: "bg-green-100 text-green-700 hover:bg-green-200" },
    { name: "Emociones", icon: "😊", count: 30, color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
    { name: "Trabajo", icon: "💼", count: 45, color: "bg-red-100 text-red-700 hover:bg-red-200" },
    { name: "Salud", icon: "🏥", count: 28, color: "bg-pink-100 text-pink-700 hover:bg-pink-200" },
    { name: "Escuela", icon: "📚", count: 52, color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200" },
    { name: "Viajes", icon: "✈️", count: 35, color: "bg-teal-100 text-teal-700 hover:bg-teal-200" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Categorías populares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestras categorías organizadas por temas. Elige la que más te interese y empieza a aprender.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/categoria/${category.name.toLowerCase()}`}
              className={`${category.color} rounded-2xl p-6 text-center transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer`}
            >
              <span className="text-4xl mb-3 block">{category.icon}</span>
              <h3 className="font-bold text-lg mb-1">{category.name}</h3>
              <p className="text-sm opacity-75">{category.count} señas</p>
            </Link>
          ))}
        </div>

        {/* Botón ver todas */}
        <div className="text-center">
          <Link
            to="/categorias"
            className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            <span>Ver todas las categorías</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}