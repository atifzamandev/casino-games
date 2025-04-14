import { FC } from 'react'
import { Header } from 'semantic-ui-react'
import useCategories from '../hooks/useCategories'
import useGames from '../hooks/useGames'
import { Game, GameCategory } from '../types/games'

const HomePage: FC = () => {
  const { data: gameCategories } = useCategories()
  const { data: gamesData, isLoading, error } = useGames()

  if (isLoading) {
    return <div>Loading categories...</div>
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>
  }

  if (!gamesData || gamesData.length === 0) {
    return <div>No games available</div>
  }

  return (
    <>
      <Header as="h1">Welcome to Comeon frontend challagne</Header>
      <ul>{gameCategories?.map((gameCategory: GameCategory) => <li key={gameCategory.id}>{gameCategory.name}</li>)}</ul>

      <ul>
        {gamesData.map((game: Game) => (
          <li key={game.code}>
            <img src={`http://localhost:3001/${game.icon}`} alt={game.name} width="200" height="200" />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <p>Categories: {game.categoryIds.map((id) => id).join(', ')}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
