import { ChangeEvent } from 'react'
import { Grid, GridColumn, Input } from 'semantic-ui-react'
import './SearchGame.css'

interface SearchGameProps {
  searchText: string
  onSearch: (searchText: string) => void
}

const SearchGame = ({ searchText, onSearch }: SearchGameProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <Grid className='search-field'>
      <GridColumn className='search-column'>
        <Input icon='search' placeholder='Search Game' value={searchText} onChange={handleSearch} fluid />
      </GridColumn>
    </Grid>
  )
}

export default SearchGame
