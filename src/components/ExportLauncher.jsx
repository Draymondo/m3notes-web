import { Download } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import './ExportLauncher.css'

export default function ExportLauncher() {
  const navigate = useNavigate()
  const location = useLocation()
  if (location.pathname === '/login' || location.pathname === '/export') return null
  return <button className="export-launcher" onClick={() => navigate('/export')} title="Exporter et sauvegarder" aria-label="Exporter et sauvegarder"><Download size={19} /></button>
}
