import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'  // ← AGREGAR useNavigate

export default function LoginPage() {
  const navigate = useNavigate()  // ← AGREGAR ESTA LÍNEA
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Login exitoso:', formData)
      
      // ← CAMBIAR ESTA PARTE
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
      
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Error al iniciar sesión. Verifica tus datos.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... el resto del código se mantiene IGUAL

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-5xl">🤟</span>
          </Link>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Bienvenido de vuelta
          </h2>
          <p className="mt-2 text-gray-600">
            Continúa tu aprendizaje
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Login social (opcional) */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition-colors">
              <span className="text-xl">🔍</span>
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition-colors">
              <span className="text-xl">📘</span>
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O continúa con email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                  errors.email 
                    ? 'border-red-300 focus:ring-red-400' 
                    : 'border-gray-300 focus:ring-purple-400 focus:border-purple-400'
                }`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Contraseña */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-700">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-colors pr-12 ${
                    errors.password 
                      ? 'border-red-300 focus:ring-red-400' 
                      : 'border-gray-300 focus:ring-purple-400 focus:border-purple-400'
                  }`}
                  placeholder="Tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Recordarme */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                id="remember"
                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Recordarme
              </label>
            </div>

            {/* Botón submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>

          {/* Link a registro */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-purple-600 hover:text-purple-700 font-semibold">
                Regístrate gratis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}