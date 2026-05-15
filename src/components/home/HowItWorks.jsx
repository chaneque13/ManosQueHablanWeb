export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Explora categorías",
      description: "Elige entre 15 categorías diferentes organizadas por temas cotidianos",
      color: "from-purple-500 to-purple-700",
      icon: "🔍"
    },
    {
      number: 2,
      title: "Aprende con videos",
      description: "Videos en HD desde múltiples ángulos con cámara lenta",
      color: "from-blue-500 to-blue-700",
      icon: "📹"
    },
    {
      number: 3,
      title: "Practica y avanza",
      description: "Sistema que recuerda tu progreso y te motiva",
      color: "from-green-500 to-green-700",
      icon: "🚀"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h2>
          <p className="text-xl text-gray-600">Aprender lengua de señas nunca fue tan fácil:</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg`}>
                {step.icon}
              </div>
              <div className="text-sm font-semibold text-purple-600 mb-2">PASO {step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}