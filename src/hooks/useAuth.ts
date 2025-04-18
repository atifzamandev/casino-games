import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const loginContext = useContext(AuthContext)
  if (!loginContext) {
    throw new Error('There is some error in Login Context...')
  }
  return loginContext
}
