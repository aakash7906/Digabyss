import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react'

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder — connect to backend
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-sm text-gray-400">
            {isLogin
              ? 'Sign in to access your dashboard, orders, and digital library.'
              : 'Join DIGABYSS and start buying, selling, and trading digital content.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-1 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
              isLogin
                ? 'bg-success text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
              !isLogin
                ? 'bg-success text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name — Sign Up only */}
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[#1d1d1d] border border-[#2a2a2a] rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success transition-colors"
                  required
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-[#1d1d1d] border border-[#2a2a2a] rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success transition-colors"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-[#1d1d1d] border border-[#2a2a2a] rounded-lg pl-11 pr-11 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password — Sign Up only */}
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full bg-[#1d1d1d] border border-[#2a2a2a] rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success transition-colors"
                  required
                />
              </div>
            </div>
          )}

          {/* Forgot Password — Login only */}
          {isLogin && (
            <div className="flex justify-end">
              <button type="button" className="text-xs text-success hover:text-white transition-colors font-semibold">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Terms Agreement — Sign Up only */}
          {!isLogin && (
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-0.5 w-4 h-4 rounded border-[#2a2a2a] bg-[#1d1d1d] accent-success"
              />
              <label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed">
                I agree to the{' '}
                <a href="/terms" className="text-success hover:text-white transition-colors">Terms & Return Policy</a>
                {' '}and{' '}
                <a href="/privacy-policy" className="text-success hover:text-white transition-colors">Privacy Policy</a>
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-success hover:bg-success/80 text-black font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#2a2a2a]" />
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Or continue with</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-3 bg-[#1d1d1d] border border-[#2a2a2a] rounded-lg hover:border-success transition-colors text-sm font-semibold text-gray-300 hover:text-white">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-[#1d1d1d] border border-[#2a2a2a] rounded-lg hover:border-success transition-colors text-sm font-semibold text-gray-300 hover:text-white">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            GitHub
          </button>
        </div>

        {/* Bottom Switch */}
        <p className="text-center text-sm text-gray-400 mt-8">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-success hover:text-white transition-colors font-bold"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-[#2a2a2a]">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">SSL Secured</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <CheckCircle className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Verified Platform</span>
          </div>
        </div>

      </div>
    </div>
  )
}
