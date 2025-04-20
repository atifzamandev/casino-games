import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface ProtectedRouteProps {
  children: ReactElement
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { player } = useAuth()

  if (!player) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
