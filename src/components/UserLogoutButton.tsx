import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { useAuth } from '../hooks/useAuth'
import ErrorMessage from './ErrorMessage'

const UserLogoutButton = () => {
  const [error, setError] = useState<string>('')

  const { logout, isLoggingOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
      }
    }
  }

  return (
    <div>
      <Button
        secondary
        icon
        labelPosition='left'
        onClick={handleLogout}
        loading={isLoggingOut}
        aria-label='Logout from account'
        className='logout-button'>
        Log Out
        <Icon name='chevron left' className='btn-icon' />
      </Button>
      {error && <ErrorMessage errorMessage={error} />}
    </div>
  )
}

export default UserLogoutButton
