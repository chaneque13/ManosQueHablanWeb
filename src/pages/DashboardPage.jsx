import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userData } from '../data/userData'
import ProgressRing from '../components/dashboard/ProgressRing'
import AchievementBadge from '../components/dashboard/AchievementBadge'
import ActivityItem from '../components/dashboard/ActivityItem'
import LessonCard from '../components/dashboard/LessonCard'
import StatsCard from '../components/dashboard/StatsCard'
import RecentSignCard from '../components/dashboard/RecentSignCard'

export default function DashboardPage() {
  const [greeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Buenos días'
    if (hour < 18) return 'Buenas tardes'
    return 'Buenas noches'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header del Dashboard */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {greeting}, {userData.nombre.split(' ')[0]} 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {userData.estadisticas.diasConsecutivos > 0 
                  ? `🔥 ${userData.estadisticas.diasConsecutivos} días de racha. ¡Sigue así!`
                  : '¡Comienza tu racha de aprendizaje hoy!'}
              </p>
            </div>
            <Link
              to="/lecciones"
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors text-center"
            >
              Continuar aprendiendo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna principal (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tarjetas de estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatsCard 
                icon="📚" 
                label="Señas aprendidas" 
                value={userData.estadisticas.senasAprendidas}
                total={userData.estadisticas.totalSenas}
                color="purple"
              />
              <StatsCard 
                icon="🎓" 
                label="Lecciones" 
                value={userData.estadisticas.leccionesCompletadas}
                total={userData.estadisticas.totalLecciones}
                color="blue"
              />
              <StatsCard 
                icon="⏱️" 
                label="Tiempo total" 
                value={userData.estadisticas.tiempoPractica}
                color="green"
              />
              <StatsCard 
                icon="🔥" 
                label="Racha actual" 
                value={`${userData.estadisticas.diasConsecutivos} días`}
                color="orange"
              />
            </div>

            {/* Lecciones recomendadas */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  📖 Continuar aprendiendo
                </h2>
                <Link 
                  to="/lecciones" 
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  Ver todas →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userData.leccionesRecomendadas.map(leccion => (
                  <LessonCard key={leccion.id} leccion={leccion} />
                ))}
              </div>
            </div>

            {/* Actividad reciente */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                📅 Actividad reciente
              </h2>
              <div className="space-y-4">
                {userData.actividadReciente.map(actividad => (
                  <ActivityItem key={actividad.id} actividad={actividad} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (1/3) */}
          <div className="space-y-6">
            
            {/* Progreso general */}
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Progreso general
              </h2>
              <ProgressRing 
                progress={userData.progresoGeneral} 
                size={160}
                strokeWidth={12}
              />
              <p className="text-sm text-gray-500 mt-4">
                {userData.progresoGeneral}% completado
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Nivel: {userData.nivel}
              </p>
            </div>

            {/* Logros */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  🏆 Logros
                </h2>
                <span className="text-sm text-gray-500">
                  {userData.logros.filter(l => l.desbloqueado).length}/{userData.logros.length}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {userData.logros.map(logro => (
                  <AchievementBadge key={logro.id} logro={logro} />
                ))}
              </div>
            </div>

            {/* Señas recientes */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                🤟 Señas recientes
              </h2>
              <div className="space-y-3">
                {userData.senasRecientes.map(seña => (
                  <RecentSignCard key={seña.id} seña={seña} />
                ))}
              </div>
              <Link 
                to="/diccionario" 
                className="block text-center text-purple-600 hover:text-purple-700 font-medium text-sm mt-4"
              >
                Ir al diccionario →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}