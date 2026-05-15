export default function RecentSignCard({ seña }) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{seña.imagen}</span>
        <div>
          <p className="font-medium text-gray-900">{seña.palabra}</p>
          <p className="text-xs text-gray-500">{seña.categoria}</p>
        </div>
      </div>
      {seña.aprendida ? (
        <span className="text-green-500 text-sm font-medium">✓</span>
      ) : (
        <span className="text-gray-400 text-sm">Nueva</span>
      )}
    </div>
  )
}