import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Grid, GridColumn, GridRow, Header, Icon } from 'semantic-ui-react'
import './GamePlay.css'

declare global {
  interface Window {
    comeon: {
      game: {
        launch: (gameCode: string) => void
      }
    }
  }
}

const GamePlay = () => {
  const { gameCode } = useParams<{ gameCode: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (gameCode && window.comeon?.game?.launch) {
      window.comeon.game.launch(gameCode)
    }
  }, [gameCode])

  const handleBack = () => {
    navigate('/games')
  }

  return (
    <Container className='gameplay-container'>
      <Grid>
        <GridRow>
          <GridColumn textAlign='center'>
            <Header size='large'>Playing Game: {gameCode}</Header>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Button secondary icon labelPosition='left' onClick={handleBack} aria-label='Back to Games'>
              Back to Games
              <Icon name='chevron left' className='btn-icon' />
            </Button>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <div id='game-launch' className='game-container' />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  )
}

export default GamePlay
