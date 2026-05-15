export default function StatsCard({ icon, label, value, total, color }) {
  const colorClasses = {
    purple: 'bg-purple-50 text-purple-600',
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 ${colorClasses[color]} rounded-lg flex items-center justify-center text-xl mb-3`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
      {total && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className={`h-1.5 rounded-full ${
              color === 'purple' ? 'bg-purple-600' :
              color === 'blue' ? 'bg-blue-600' :
              color === 'green' ? 'bg-green-600' :
              'bg-orange-600'
            }`}
            style={{ width: `${Math.min((value / total) * 100, 100)}%` }}
          />
        </div>
      )}
    </div>
  )
}