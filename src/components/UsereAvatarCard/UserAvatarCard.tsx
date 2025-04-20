import { Card, CardContent, CardDescription, CardHeader, Image } from 'semantic-ui-react'
import { useAuth } from '../../hooks/useAuth'
import './UserAvatarCard.css'

const UserAvatarCard = () => {
  const { player } = useAuth()

  if (!player) return null

  const { name, event, avatar } = player

  return (
    <div className="user-avatar-card">
      <Image
        className="user-avatar"
        floated="right"
        src={avatar ? `${import.meta.env.VITE_APP_API_BASE_URL}/${avatar}` : 'https://placehold.co/60x60'}
        alt="User Avatar"
      />
      <Card>
        <CardContent>
          <CardHeader className="card-header">{name}</CardHeader>
          <CardDescription className="card-description">{event}</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserAvatarCard
