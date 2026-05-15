export default function AchievementBadge({ logro }) {
  return (
    <div 
      className={`relative group cursor-pointer ${
        logro.desbloqueado ? '' : 'opacity-40'
      }`}
      title={logro.descripcion}
    >
      <div className={`
        w-full aspect-square rounded-xl flex items-center justify-center text-3xl
        ${logro.desbloqueado 
          ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-sm' 
          : 'bg-gray-100'
        }
      `}>
        {logro.icono}
      </div>
      <p className="text-xs text-center mt-1 text-gray-700 font-medium truncate">
        {logro.nombre}
      </p>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {logro.descripcion}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
          <div className="border-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  )
}