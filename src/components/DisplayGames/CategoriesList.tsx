import { Divider, Grid, GridColumn, Header, List, ListItem } from 'semantic-ui-react'
import useCategories from '../../hooks/useCategories'
import LoadingSpinner from '../LoadingSpinner'
import ErrorMessage from '../ErrorMessage'
import './Games.css'

const CategoriesList = () => {
  const { data: gameCategories, isLoading, error } = useCategories()

  if (isLoading) return <LoadingSpinner text={'Categories loading...'} />

  if (error || !gameCategories?.length)
    return <ErrorMessage errorMessage="Failed to load categories. Please try again." />

  return (
    <Grid>
      <GridColumn>
        <Header size="large">Categories</Header>
        <Divider />
        <List className="games-typography games-spacing">
          {gameCategories.map((category) => (
            <ListItem key={category.id}>{category.name}</ListItem>
          ))}
        </List>
      </GridColumn>
    </Grid>
  )
}

export default CategoriesList
