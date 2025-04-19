import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <Container
      textAlign="center"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '20vh',
      }}>
      <Header as="h2" inverted>
        {isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error occurred'}
      </Header>
    </Container>
  )
}

export default ErrorPage
