import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { VaultProvider } from './context/VaultContext'
import SyncBanner from './components/SyncBanner'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const NotePage = lazy(() => import('./pages/NotePage'))
const VaultPage = lazy(() => import('./pages/VaultPage'))
const VaultNotePage = lazy(() => import('./pages/VaultNotePage'))

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
    <VaultProvider>
      <SyncBanner />
      <Suspense fallback={<div className="loading-screen">Chargement…</div>}>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/note/:id" element={<PrivateRoute><NotePage /></PrivateRoute>} />
          <Route path="/vault" element={<PrivateRoute><VaultPage /></PrivateRoute>} />
          <Route path="/vault/:id" element={<PrivateRoute><VaultNotePage /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </VaultProvider>
  )
}
