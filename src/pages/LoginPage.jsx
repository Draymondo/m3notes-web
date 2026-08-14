import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

export default function LoginPage() {
  const { login, register, loginWithGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isSignUp) {
        await register(email.trim(), password)
      } else {
        await login(email.trim(), password)
      }
    } catch (err) {
      setError(err.message || 'Erreur')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setError('')
    setGoogleLoading(true)
    try {
      await loginWithGoogle()
    } catch (err) {
      setError(err.message || 'Erreur de connexion Google')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>M3Notes</h1>
        <p className="subtitle">{isSignUp ? 'Créer un compte' : 'Connexion'}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? '…' : (isSignUp ? "S'inscrire" : 'Se connecter')}
          </button>
        </form>

        <div className="divider"><span>ou</span></div>

        <button className="google-btn" onClick={handleGoogle} disabled={googleLoading} type="button">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.93c1.71-1.58 2.69-3.9 2.69-6.64z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.93-2.27c-.81.54-1.85.86-3.03.86-2.33 0-4.31-1.58-5.02-3.7H.96v2.34C2.44 15.98 5.48 18 9 18z"/>
            <path fill="#FBBC05" d="M3.98 10.71c-.18-.54-.28-1.11-.28-1.71s.1-1.17.28-1.71V4.95H.96C.35 6.17 0 7.55 0 9s.35 2.83.96 4.05l3.02-2.34z"/>
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.6-2.6C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.95l3.02 2.34C4.69 5.16 6.67 3.58 9 3.58z"/>
          </svg>
          {googleLoading ? '…' : 'Continuer avec Google'}
        </button>

        <button className="switch" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Déjà un compte ? Se connecter' : "Pas de compte ? S'inscrire"}
        </button>
      </div>
    </div>
  )
}
