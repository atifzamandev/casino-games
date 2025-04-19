import { createContext, ReactNode, useState } from 'react'
import { useLoginMutation } from '../hooks/useLogin'
import { LoginFormData, Player } from '../types/Login'

interface AuthContextType {
  loginForm: LoginFormData
  isPending: boolean
  isLoggedIn: boolean
  player: Player | null
  setLoginForm: (form: LoginFormData | ((prev: LoginFormData) => LoginFormData)) => void
  login: ({ username, password }: LoginFormData) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginForm, setLoginForm] = useState<LoginFormData>({
    username: '',
    password: '',
  })
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
    loginForm,
    isPending,
    isLoggedIn,
    player,
    setLoginForm,
    login,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
