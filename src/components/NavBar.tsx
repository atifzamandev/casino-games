import { Grid, GridColumn } from 'semantic-ui-react'
import SearchGame from './SearchGame/SearchGame'
import UserAvatarCard from './UsereAvatarCard/UserAvatarCard'
import UserLogoutButton from './UserLogoutButton'

const NavBar = () => {
  return (
    <Grid stackable>
      <GridColumn mobile={16} tablet={8} computer={8}>
        <UserAvatarCard />
        <UserLogoutButton />
      </GridColumn>

      <GridColumn mobile={16} tablet={8} computer={8} verticalAlign="middle">
        <SearchGame />
      </GridColumn>
    </Grid>
  )
}

export default NavBar
