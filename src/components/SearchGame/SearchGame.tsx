import { Grid, GridColumn, Search } from 'semantic-ui-react'
import './SearchGame.css'

const SearchGame = () => {
  return (
    <Grid className="search-field">
      <GridColumn className="search-column">
        <Search placeholder="Search Game" />
      </GridColumn>
    </Grid>
  )
}

export default SearchGame
