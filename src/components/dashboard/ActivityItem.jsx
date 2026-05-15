export default function ActivityItem({ actividad }) {
  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <span className="text-2xl">{actividad.icono}</span>
      <div className="flex-grow">
        <p className="text-gray-900 font-medium">{actividad.descripcion}</p>
        <p className="text-sm text-gray-500">{actividad.tiempo}</p>
      </div>
    </div>
  )
}