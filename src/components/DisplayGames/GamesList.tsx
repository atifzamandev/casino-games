import { Fragment } from 'react'
import { Divider, Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import useGames from '../../hooks/useGames'
import ErrorMessage from '../ErrorMessage'
import LoadingSpinner from '../LoadingSpinner'
import GameCard from './GameCard'
import './Games.css'

const GamesList = () => {
  const { data: gamesData, isLoading, error } = useGames()

  if (isLoading) return <LoadingSpinner text={'Loading games...'} />

  if (error || !gamesData?.length) return <ErrorMessage errorMessage='Failed to load games. Please try again.' />

  return (
    <Grid className='games-typography'>
      <GridRow className='game-list-heading'>
        <GridColumn>
          <Header size='large'>Games</Header>
        </GridColumn>
      </GridRow>

      {gamesData.map((game) => (
        <Fragment key={game.code}>
          <Divider />
          <GridRow>
            <GameCard icon={game.icon} name={game.name} description={game.description} code={game.code} />
          </GridRow>
        </Fragment>
      ))}
    </Grid>
  )
}

export default GamesList
