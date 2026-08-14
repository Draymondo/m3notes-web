import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'
import './SyncBanner.css'

export default function SyncBanner() {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const goOnline = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return (
    <div className={`offline-badge ${online ? '' : 'visible'}`} title="Hors ligne — synchronisation en attente">
      <WifiOff size={14} />
    </div>
  )
}
