import { Fragment } from 'react'
import { Divider, Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'
import useGames from '../../hooks/useGames'
import { CategoryId } from '../../types/Games'
import ErrorMessage from '../ErrorMessage'
import LoadingSpinner from '../LoadingSpinner'
import GameCard from './GameCard'
import './Games.css'

interface GamesListProps {
  selectedCategoryId: CategoryId
}

const GamesList = ({ selectedCategoryId }: GamesListProps) => {
  const { data: gamesData, isLoading, error } = useGames()

  if (isLoading) return <LoadingSpinner text={'Loading games...'} />

  if (error || !gamesData?.length) return <ErrorMessage errorMessage='Failed to load games. Please try again.' />

  const filteredGames =
    selectedCategoryId === CategoryId.ALL
      ? gamesData
      : gamesData.filter((game) => game.categoryIds.includes(selectedCategoryId))

  return (
    <Grid className='games-typography'>
      <GridRow className='game-list-heading'>
        <GridColumn>
          <Header size='large'>Games</Header>
        </GridColumn>
      </GridRow>

      {filteredGames.map((game) => (
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
