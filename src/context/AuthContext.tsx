import { createContext, ReactNode, useState } from 'react'
import { useLoginMutation } from '../hooks/useLogin'
import { LoginFormData, Player } from '../types/Login'

interface AuthContextType {
  isLoggedIn: boolean
  player: Player | null
  login: ({ username, password }: LoginFormData) => Promise<void>
  isPending: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [player, setPlayer] = useState<Player | null>(null)
  const { mutateAsync: loginMutation, isPending } = useLoginMutation()

  const login = async ({ username, password }: LoginFormData) => {
    const response = await loginMutation({ username, password })
    const isSuccess = response.status === 'success'

    setIsLoggedIn(isSuccess)
    setPlayer(isSuccess ? response.player : null)
  }

  const value = {
    isLoggedIn,
    player,
    login,

    isPending,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
