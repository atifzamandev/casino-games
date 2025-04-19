import { Card, CardContent, CardDescription, CardHeader, Image } from 'semantic-ui-react'
import { useAuth } from '../../hooks/useAuth'
import './UserAvatarCard.css'

const UserAvatarCard = () => {
  const { player } = useAuth()
  
  return (
    <div className="user-avatar-card">
      <Image
        className="user-avatar"
        floated="right"
        src={`${import.meta.env.VITE_APP_API_BASE_URL}/${player?.avatar}`}
        alt="User Avatar"
      />
      <Card>
        <CardContent>
          <CardHeader className="card-header">{player?.name}</CardHeader>
          <CardDescription className="card-description">{player?.event}</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserAvatarCard
