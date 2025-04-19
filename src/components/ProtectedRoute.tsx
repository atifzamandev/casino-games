import { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface ProtectedRouteProps {
  children: ReactElement
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { player } = useAuth()
  const location = useLocation()

  if (!player) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
