import { FC } from 'react'
import { Container } from 'semantic-ui-react'
import ComeonLogo from '../components/ComeonLogo'
import LoginForm from '../components/LoginForm'

const HomePage: FC = () => {
  return (
    <main className="body">
      <Container>
        <header>
          <ComeonLogo />
        </header>
        <LoginForm />
      </Container>
    </main>
  )
}

export default HomePage
