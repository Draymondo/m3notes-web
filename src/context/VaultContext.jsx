import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { getVaultMeta, setupVault, unlockVault as unlockVaultKey } from '../services/vault'

const VaultContext = createContext()
const VAULT_AUTO_LOCK_MS = 5 * 60 * 1000

export function VaultProvider({ children }) {
  const { user } = useAuth()
  const [vaultKey, setVaultKey] = useState(null)
  const [hasVault, setHasVault] = useState(null)
  const autoLockTimer = useRef(null)

  useEffect(() => {
    setVaultKey(null)
    setHasVault(null)
  }, [user?.uid])

  const checkVaultExists = async () => {
    if (!user) return false
    const meta = await getVaultMeta(user.uid)
    const exists = !!meta
    setHasVault(exists)
    return exists
  }

  const setup = async (password) => {
    const key = await setupVault(user.uid, password)
    setVaultKey(key)
    setHasVault(true)
    return key
  }

  const unlock = async (password) => {
    const key = await unlockVaultKey(user.uid, password)
    if (key) setVaultKey(key)
    return key
  }

  const lock = () => setVaultKey(null)

  useEffect(() => {
    if (!vaultKey) {
      if (autoLockTimer.current) {
        clearTimeout(autoLockTimer.current)
        autoLockTimer.current = null
      }
      return undefined
    }

    const resetAutoLock = () => {
      if (autoLockTimer.current) clearTimeout(autoLockTimer.current)
      autoLockTimer.current = setTimeout(() => {
        setVaultKey(null)
        autoLockTimer.current = null
      }, VAULT_AUTO_LOCK_MS)
    }

    const activityEvents = ['pointerdown', 'keydown', 'touchstart']
    activityEvents.forEach(event => window.addEventListener(event, resetAutoLock, { passive: true }))
    resetAutoLock()

    return () => {
      if (autoLockTimer.current) clearTimeout(autoLockTimer.current)
      autoLockTimer.current = null
      activityEvents.forEach(event => window.removeEventListener(event, resetAutoLock))
    }
  }, [vaultKey])

  return (
    <VaultContext.Provider value={{ vaultKey, hasVault, checkVaultExists, setup, unlock, lock }}>
      {children}
    </VaultContext.Provider>
  )
}

export const useVault = () => useContext(VaultContext)
