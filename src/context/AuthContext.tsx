import { createContext, ReactNode, useState } from 'react'
import { useLoginMutation } from '../hooks/useLogin'
import { useLoginOutMutation } from '../hooks/useLogout'
import { LoginFormData, Player } from '../types/Login'

interface AuthContextType {
  loginForm: LoginFormData
  isPending: boolean
  isLoggingOut: boolean
  player: Player | null
  setLoginForm: (form: LoginFormData | ((prev: LoginFormData) => LoginFormData)) => void
  login: ({ username, password }: LoginFormData) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginForm, setLoginForm] = useState<LoginFormData>({ username: '', password: '' })

  const [player, setPlayer] = useState<Player | null>(null)
  const { mutateAsync: loginMutation, isPending } = useLoginMutation()
  const { mutateAsync: loginoutMutation, isPending: isLoggingOut } = useLoginOutMutation()

  const login = async ({ username, password }: LoginFormData) => {
    const response = await loginMutation({ username, password })
    const isSuccess = response.status === 'success'

    setPlayer(isSuccess ? response.player : null)
  }

  const logout = async () => {
    if (loginForm.username) {
      const response = await loginoutMutation({ username: loginForm.username })

      if (response.status === 'success') {
        setPlayer(null)
        setLoginForm({ username: '', password: '' })
      }
    }
  }

  const value = {
    loginForm,
    isPending,
    isLoggingOut,

    player,
    setLoginForm,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
