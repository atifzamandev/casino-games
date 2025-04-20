import { useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Image,
} from 'semantic-ui-react'
import './Games.css'

interface GameCardProps {
  name: string
  description: string
  icon: string
  code: string
}

const GameCard = ({ name, description, icon, code }: GameCardProps) => {
  const navigate = useNavigate()

  const handleGamePlay = () => {
    navigate(`/gameplay/${code}`)
  }
  return (
    <Card fluid>
      <Grid stackable className='game-card'>
        <GridRow>
          <GridColumn width={4}>
            <Image
              src={icon ? `${import.meta.env.VITE_APP_API_BASE_URL}/${icon}` : 'https://placehold.co/300x150'}
              alt={`Image for ${name}`}
              className='game-card-image'
            />
          </GridColumn>
          <GridColumn width={12}>
            <CardContent>
              <CardHeader as='h3' className='game-card-header'>
                {name}
              </CardHeader>
              <CardDescription className='game-card-description'>{description}</CardDescription>
            </CardContent>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn textAlign='right'>
            <Button
              secondary
              icon
              labelPosition='right'
              className='play-game-button'
              onClick={handleGamePlay}
              aria-label='Play Game'>
              Play
              <Icon name='chevron right' className='btn-icon' />
            </Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </Card>
  )
}

export default GameCard
