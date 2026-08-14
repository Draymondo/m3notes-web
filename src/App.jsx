import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotePage from './pages/NotePage'
import SyncBanner from './components/SyncBanner'

function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="loading-screen">Chargement…</div>
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)'
      }}>
        Chargement…
      </div>
    )
  }

  return (
    <>
      <SyncBanner />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/note/:id" element={<PrivateRoute><NotePage /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
