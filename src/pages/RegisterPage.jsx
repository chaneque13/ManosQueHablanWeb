import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email no válido'
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
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
      console.log('Registro exitoso:', formData)
      
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
      
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Error al registrarse. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-5xl">🤟</span>
          </Link>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Crear cuenta gratis
          </h2>
          <p className="mt-2 text-gray-600">
            Comienza tu viaje de aprendizaje hoy
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                  errors.nombre 
                    ? 'border-red-300 focus:ring-red-400' 
                    : 'border-gray-300 focus:ring-purple-400 focus:border-purple-400'
                }`}
                placeholder="Tu nombre"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
              )}
            </div>

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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
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
                  placeholder="Mínimo 6 caracteres"
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

            {/* Confirmar contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                  errors.confirmPassword 
                    ? 'border-red-300 focus:ring-red-400' 
                    : 'border-gray-300 focus:ring-purple-400 focus:border-purple-400'
                }`}
                placeholder="Repite tu contraseña"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Términos */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                Acepto los{' '}
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  Términos y Condiciones
                </a>
                {' '}y la{' '}
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  Política de Privacidad
                </a>
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
                  Creando cuenta...
                </>
              ) : (
                'Crear cuenta gratis'
              )}
            </button>
          </form>

          {/* Separador */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div>
            <span className="text-2xl block mb-1">🚀</span>
            Acceso inmediato
          </div>
          <div>
            <span className="text-2xl block mb-1">🎓</span>
            +2,500 señas
          </div>
          <div>
            <span className="text-2xl block mb-1">💰</span>
            100% gratis
          </div>
        </div>
      </div>
    </div>
  )
}