import { Grid, GridColumn } from 'semantic-ui-react'
import SearchGame from './SearchGame/SearchGame'
import UserAvatarCard from './UsereAvatarCard/UserAvatarCard'
import UserLogoutButton from './UserLogoutButton'

interface NavBarProps {
  searchText: string
  onSearch: (searchText: string) => void
}

const NavBar = ({ searchText, onSearch }: NavBarProps) => {
  return (
    <Grid stackable>
      <GridColumn mobile={16} tablet={8} computer={8}>
        <UserAvatarCard />
        <UserLogoutButton />
      </GridColumn>

      <GridColumn mobile={16} tablet={8} computer={8} verticalAlign='middle'>
        <SearchGame searchText={searchText} onSearch={onSearch} />
      </GridColumn>
    </Grid>
  )
}

export default NavBar
