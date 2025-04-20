import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CategoriesList from '../components/DisplayGames/CategoriesList'
import GamesList from '../components/DisplayGames/GamesList'
import NavBar from '../components/NavBar'

const Games = () => {
  return (
    <Container className='games-container'>
      <NavBar />
      <Grid stackable className='games-grid'>
        <GridRow only='mobile tablet'>
          <GridColumn>
            <CategoriesList />
          </GridColumn>
        </GridRow>

        <GridRow className='games-content'>
          <GridColumn mobile={16} tablet={16} computer={12}>
            <GamesList />
          </GridColumn>

          <GridColumn only='computer' width={4}>
            <CategoriesList />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  )
}

export default Games
