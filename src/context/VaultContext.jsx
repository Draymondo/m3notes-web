import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'
import { getVaultMeta, setupVault, unlockVault as unlockVaultKey } from '../services/vault'

const VaultContext = createContext()

export function VaultProvider({ children }) {
  const { user } = useAuth()
  const [vaultKey, setVaultKey] = useState(null)
  const [hasVault, setHasVault] = useState(null)

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

  return (
    <VaultContext.Provider value={{ vaultKey, hasVault, checkVaultExists, setup, unlock, lock }}>
      {children}
    </VaultContext.Provider>
  )
}

export const useVault = () => useContext(VaultContext)
