import { useEffect, useState } from 'react'
import { Check, Cloud, WifiOff } from 'lucide-react'
import { getFirestoreCtx } from '../firebase'
import './SyncBanner.css'

export default function SyncBanner() {
  const [online, setOnline] = useState(navigator.onLine)
  const [pending, setPending] = useState(false)
  const [showSynced, setShowSynced] = useState(false)

  useEffect(() => {
    let cancelled = false
    let unsubscribe = null
    let timer = null

    const updateNetworkState = () => {
      const isOnline = navigator.onLine
      setOnline(isOnline)
      if (!isOnline) setShowSynced(false)
    }

    const watchFirestore = async () => {
      try {
        const { db, collection, query, limit, onSnapshot } = await getFirestoreCtx()
        if (cancelled) return

        const q = query(collection(db, 'notes'), limit(1))
        unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
          if (cancelled) return
          const hasPendingWrites = snapshot.docs.some(doc => doc.metadata.hasPendingWrites)
          setPending(hasPendingWrites)
          if (!hasPendingWrites && navigator.onLine) {
            setShowSynced(true)
            clearTimeout(timer)
            timer = setTimeout(() => setShowSynced(false), 1800)
          }
        })
      } catch (error) {
        console.error('Sync status error:', error)
      }
    }

    window.addEventListener('online', updateNetworkState)
    window.addEventListener('offline', updateNetworkState)
    watchFirestore()

    return () => {
      cancelled = true
      window.removeEventListener('online', updateNetworkState)
      window.removeEventListener('offline', updateNetworkState)
      unsubscribe?.()
      clearTimeout(timer)
    }
  }, [])

  let icon = <Cloud size={14} />
  let title = 'Synchronisé'
  let className = 'sync-badge synced'

  if (!online) {
    icon = <WifiOff size={14} />
    title = 'Hors ligne — les modifications seront synchronisées au retour du réseau'
    className = 'sync-badge offline'
  } else if (pending) {
    icon = <Cloud size={14} />
    title = 'Synchronisation en cours…'
    className = 'sync-badge syncing'
  } else if (showSynced) {
    icon = <Check size={14} />
    title = 'Synchronisé'
    className = 'sync-badge synced visible'
  }

  return (
    <div className={className} title={title} aria-label={title}>
      {icon}
      <span>{title}</span>
    </div>
  )
}
