import { useState } from 'react'
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CategoriesList from '../components/DisplayCategories/CategoriesList'
import GamesList from '../components/DisplayGames/GamesList'
import NavBar from '../components/NavBar'
import { CategoryId } from '../types/Games'

const Games = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>(CategoryId.ALL)

  return (
    <Container className='games-container'>
      <NavBar />
      <Grid stackable className='games-grid'>
        <GridRow only='mobile tablet'>
          <GridColumn>
            <CategoriesList selectedCategoryId={selectedCategoryId} onCategorySelect={setSelectedCategoryId} />
          </GridColumn>
        </GridRow>

        <GridRow className='games-content'>
          <GridColumn mobile={16} tablet={16} computer={12}>
            <GamesList selectedCategoryId={selectedCategoryId} />
          </GridColumn>

          <GridColumn only='computer' width={4}>
            <CategoriesList selectedCategoryId={selectedCategoryId} onCategorySelect={setSelectedCategoryId} />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  )
}

export default Games
