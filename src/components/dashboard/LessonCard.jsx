import { Link } from 'react-router-dom'

export default function LessonCard({ leccion }) {
  return (
    <Link 
      to={`/lecciones/${leccion.id}`}
      className="block bg-gray-50 rounded-xl p-4 hover:bg-purple-50 hover:shadow-md transition-all group"
    >
      <div className="text-4xl mb-3">{leccion.imagen}</div>
      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
        {leccion.titulo}
      </h3>
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span>{leccion.completadas}/{leccion.totalSenas} señas</span>
        <span>{leccion.progreso}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div 
          className="bg-purple-600 h-2 rounded-full transition-all"
          style={{ width: `${leccion.progreso}%` }}
        />
      </div>
      {leccion.progreso === 0 ? (
        <span className="inline-block mt-3 text-sm text-purple-600 font-medium">
          Comenzar →
        </span>
      ) : leccion.progreso === 100 ? (
        <span className="inline-block mt-3 text-sm text-green-600 font-medium">
          ✅ Completada
        </span>
      ) : (
        <span className="inline-block mt-3 text-sm text-purple-600 font-medium">
          Continuar →
        </span>
      )}
    </Link>
  )
}