import { Card, CardContent, CardDescription, CardHeader, Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'
import './Games.css'

interface GameCardProps {
  name: string
  description: string
  icon: string
}

const GameCard = ({ name, description, icon }: GameCardProps) => (
  <Card fluid>
    <Grid stackable className="game-card">
      <GridRow>
        <GridColumn width={4}>
          <Image
            src={`${import.meta.env.VITE_APP_API_BASE_URL}/${icon}`}
            alt={`Image for ${name}`}
            className="game-card-image"
          />
        </GridColumn>
        <GridColumn width={12}>
          <CardContent>
            <CardHeader as="h3" className="game-card-header">
              {name}
            </CardHeader>
            <CardDescription className="game-card-description">{description}</CardDescription>
          </CardContent>
        </GridColumn>
      </GridRow>
    </Grid>
  </Card>
)

export default GameCard
