import { Routes, Route } from 'react-router-dom'
import { VaultProvider } from './context/VaultContext'
import ExportLauncher from './components/ExportLauncher'
import HomePage from './pages/HomePage'
import NotePage from './pages/NotePage'
import LoginPage from './pages/LoginPage'
import VaultPage from './pages/VaultPage'
import VaultNotePage from './pages/VaultNotePage'
import ExportPage from './pages/ExportPage'

export default function App() {
  return (
    <VaultProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/vault" element={<VaultPage />} />
        <Route path="/vault/note/:id" element={<VaultNotePage />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
      <ExportLauncher />
    </VaultProvider>
  )
}
