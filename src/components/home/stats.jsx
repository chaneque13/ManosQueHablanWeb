export default function Stats() {
  const stats = [
    { icon: "👥", number: "50,000+", label: "Estudiantes activos" },
    { icon: "📚", number: "2,500+", label: "Señas catalogadas" },
    { icon: "⭐", number: "4.8/5", label: "Calificación promedio" },
    { icon: "🎯", number: "95%", label: "Tasa de aprendizaje" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform inline-block">
                {stat.icon}
              </span>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}