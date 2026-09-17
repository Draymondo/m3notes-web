import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { VaultProvider } from './context/VaultContext'
import HomePage from './pages/HomePage'
import NotePage from './pages/NotePage'
import LoginPage from './pages/LoginPage'
import VaultPage from './pages/VaultPage'
import VaultNotePage from './pages/VaultNotePage'
import ExportPage from './pages/ExportPage'

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <VaultProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/vault" element={<VaultPage />} />
            <Route path="/vault/note/:id" element={<VaultNotePage />} />
            <Route path="/export" element={<ExportPage />} />
          </Routes>
        </VaultProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
