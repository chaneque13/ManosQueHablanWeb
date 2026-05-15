export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Explora categorías",
      description: "Elige entre 15 categorías diferentes organizadas por temas cotidianos de la vida diaria",
      color: "from-purple-500 to-purple-700",
      icon: "🔍"
    },
    {
      number: 2,
      title: "Aprende con videos",
      description: "Videos en alta definición desde múltiples ángulos con repetición en cámara lenta",
      color: "from-blue-500 to-blue-700",
      icon: "📹"
    },
    {
      number: 3,
      title: "Practica y avanza",
      description: "Sistema inteligente que recuerda tu progreso y te motiva a seguir aprendiendo",
      color: "from-green-500 to-green-700",
      icon: "🚀"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprender lengua de señas nunca fue tan fácil. Solo necesitas 3 pasos:
          </p>
        </div>

        {/* Pasos */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Número con gradiente */}
              <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {step.icon}
              </div>
              
              {/* Contenido */}
              <div className="text-center">
                <div className="text-sm font-semibold text-purple-600 mb-2">
                  PASO {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Flecha conectora (solo entre pasos 1-2 y 2-3) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-10 -right-4 text-3xl text-purple-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}