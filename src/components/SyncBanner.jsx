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

  if (online) return null

  return (
    <div className="sync-banner">
      <WifiOff size={16} />
      <span>Hors ligne — les changements seront synchronisés au retour du réseau</span>
    </div>
  )
}
