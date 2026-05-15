export const userData = {
  nombre: "María García",
  nivel: "Intermedio",
  racha: 7,
  avatar: null, // null = usar iniciales
  progresoGeneral: 68, // porcentaje
  fechaRegistro: "2026-01-15",
  estadisticas: {
    senasAprendidas: 340,
    totalSenas: 2500,
    leccionesCompletadas: 12,
    totalLecciones: 20,
    tiempoPractica: "24h 30m",
    diasConsecutivos: 7
  },
  logros: [
    { id: 1, nombre: "Primeros pasos", descripcion: "Completa tu primera lección", icono: "🌟", desbloqueado: true },
    { id: 2, nombre: "Racha de 7 días", descripcion: "Practica 7 días seguidos", icono: "🔥", desbloqueado: true },
    { id: 3, nombre: "100 señas", descripcion: "Aprende 100 señas", icono: "💯", desbloqueado: true },
    { id: 4, nombre: "Madrugador", descripcion: "Practica antes de las 8 AM", icono: "🌅", desbloqueado: false },
    { id: 5, nombre: "Explorador", descripcion: "Visita 5 categorías diferentes", icono: "🗺️", desbloqueado: false },
    { id: 6, nombre: "500 señas", descripcion: "Aprende 500 señas", icono: "🏆", desbloqueado: false }
  ],
  actividadReciente: [
    { id: 1, tipo: "leccion", descripcion: "Completaste: Saludos básicos", tiempo: "Hace 2 horas", icono: "📚" },
    { id: 2, tipo: "seña", descripcion: "Aprendiste: 'Gracias'", tiempo: "Hace 5 horas", icono: "🙏" },
    { id: 3, tipo: "logro", descripcion: "¡Logro desbloqueado: Racha de 7 días!", tiempo: "Hace 1 día", icono: "🏆" },
    { id: 4, tipo: "practica", descripcion: "Practicaste 30 señas", tiempo: "Hace 1 día", icono: "✋" }
  ],
  leccionesRecomendadas: [
    { id: 1, titulo: "Conversación diaria", progreso: 60, totalSenas: 15, completadas: 9, imagen: "💬" },
    { id: 2, titulo: "En el restaurante", progreso: 0, totalSenas: 12, completadas: 0, imagen: "🍽️" },
    { id: 3, titulo: "Emergencias", progreso: 30, totalSenas: 10, completadas: 3, imagen: "🚨" }
  ],
  senasRecientes: [
    { id: 1, palabra: "Hola", categoria: "Saludos", aprendida: true, imagen: "👋" },
    { id: 2, palabra: "Gracias", categoria: "Saludos", aprendida: true, imagen: "🙏" },
    { id: 3, palabra: "Agua", categoria: "Comida", aprendida: false, imagen: "💧" },
    { id: 4, palabra: "Ayuda", categoria: "Emergencias", aprendida: true, imagen: "🆘" }
  ]
}