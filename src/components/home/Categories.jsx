import { Link } from 'react-router-dom'

export default function Categories() {
  const categories = [
    { name: "Saludos", icon: "👋", count: 42, color: "bg-purple-100 text-purple-700" },
    { name: "Familia", icon: "👨‍👩‍👧‍👦", count: 38, color: "bg-blue-100 text-blue-700" },
    { name: "Comida", icon: "🍎", count: 65, color: "bg-green-100 text-green-700" },
    { name: "Emociones", icon: "😊", count: 30, color: "bg-yellow-100 text-yellow-700" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Categorías populares</h2>
          <p className="text-xl text-gray-600">Explora nuestras categorías organizadas por temas</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/categoria/${category.name.toLowerCase()}`}
              className={`${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform`}
            >
              <span className="text-4xl mb-3 block">{category.icon}</span>
              <h3 className="font-bold text-lg">{category.name}</h3>
              <p className="text-sm opacity-75">{category.count} señas</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}