import { ListContent, ListHeader, ListItem } from 'semantic-ui-react'
import { CategoryId } from '../../types/Games'
import './Categories.css'

interface CategoryItemProps {
  categoryId: CategoryId
  categoryName: string
  isActive: boolean
  onClick: (categoryId: CategoryId) => void
}

const CategoryItem = ({ categoryId, categoryName, isActive, onClick }: CategoryItemProps) => (
  <ListItem className='category-item'>
    <div className={`category-content ${isActive ? 'active' : ''}`} onClick={() => onClick(categoryId)}>
      <ListContent>
        <ListHeader className='category-typography'>{categoryName}</ListHeader>
      </ListContent>
    </div>
  </ListItem>
)

export default CategoryItem
