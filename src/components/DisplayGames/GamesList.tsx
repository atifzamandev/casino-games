import { Fragment } from 'react'
import { Divider, Grid, GridColumn, GridRow, Header, Message } from 'semantic-ui-react'
import useGames from '../../hooks/useGames'
import { CategoryId } from '../../types/Games'
import ErrorMessage from '../ErrorMessage'
import LoadingSpinner from '../LoadingSpinner'
import GameCard from './GameCard'
import './Games.css'

interface GamesListProps {
  selectedCategoryId: CategoryId
  searchText: string
}

const GamesList = ({ selectedCategoryId, searchText }: GamesListProps) => {
  const { data: gamesData, isLoading, error } = useGames()

  if (isLoading) return <LoadingSpinner text={'Loading games...'} />

  if (error || !gamesData?.length) return <ErrorMessage errorMessage='Failed to load games. Please try again.' />

  const filteredGames = gamesData.filter((game) => {
    const isCategoryMatch = selectedCategoryId === CategoryId.ALL || game.categoryIds.includes(selectedCategoryId)

    if (!isCategoryMatch) return false

    if (!searchText) return true

    return game.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <Grid className='games-typography'>
      <GridRow className='game-list-heading'>
        <GridColumn>
          <Header size='large'>Games</Header>
        </GridColumn>
      </GridRow>

      {filteredGames.length === 0 ? (
        <GridRow>
          <GridColumn textAlign='center'>
            <Divider />
            <Message negative content='No games found matching your criteria.' />
          </GridColumn>
        </GridRow>
      ) : (
        filteredGames.map((game) => (
          <Fragment key={game.code}>
            <Divider />
            <GridRow>
              <GameCard icon={game.icon} name={game.name} description={game.description} code={game.code} />
            </GridRow>
          </Fragment>
        ))
      )}
    </Grid>
  )
}

export default GamesList
