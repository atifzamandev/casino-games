import { Divider, Grid, GridColumn, Header, List } from 'semantic-ui-react'
import useCategories from '../../hooks/useCategories'
import { CategoryId } from '../../types/Games'
import ErrorMessage from '../ErrorMessage'
import LoadingSpinner from '../LoadingSpinner'
import CategoryItem from './CategoryItem'

interface CategoriesListProps {
  selectedCategoryId: CategoryId
  onCategorySelect: (categoryId: CategoryId) => void
}

const CategoriesList = ({ selectedCategoryId, onCategorySelect }: CategoriesListProps) => {
  const { data: gameCategories, isLoading, error } = useCategories()

  if (isLoading) return <LoadingSpinner text={'Categories loading...'} />

  if (error || !gameCategories?.length)
    return <ErrorMessage errorMessage='Failed to load categories. Please try again.' />

  return (
    <Grid>
      <GridColumn>
        <Header size='large'>Categories</Header>
        <Divider />
        <List>
          {gameCategories.map((category) => (
            <CategoryItem
              key={category.id}
              categoryId={category.id as CategoryId}
              categoryName={category.name}
              isActive={selectedCategoryId === category.id}
              onClick={() => {
                onCategorySelect(category.id as CategoryId)
              }}
            />
          ))}
        </List>
      </GridColumn>
    </Grid>
  )
}

export default CategoriesList
