import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { VaultProvider } from './context/VaultContext'
import HomePage from './pages/HomePage'
import NotePage from './pages/NotePage'
import LoginPage from './pages/LoginPage'
import VaultPage from './pages/VaultPage'
import VaultNotePage from './pages/VaultNotePage'
import ExportPage from './pages/ExportPage'
import VaultTransferAction from './components/VaultTransferAction'

function RequireAuth({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="app-loading">Chargement…</div>
  if (!user) return <Navigate to="/login" replace />
  return children
}

function RedirectIfAuth({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="app-loading">Chargement…</div>
  if (user) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <VaultProvider>
          <Routes>
            <Route path="/login" element={<RedirectIfAuth><LoginPage /></RedirectIfAuth>} />
            <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
            <Route path="/note/:id" element={<RequireAuth><NotePage /></RequireAuth>} />
            <Route path="/vault" element={<RequireAuth><VaultPage /></RequireAuth>} />
            <Route path="/vault/note/:id" element={<RequireAuth><VaultNotePage /></RequireAuth>} />
            <Route path="/export" element={<RequireAuth><ExportPage /></RequireAuth>} />
          </Routes>
          <VaultTransferAction />
        </VaultProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
