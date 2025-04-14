import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Header } from 'semantic-ui-react'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <NavBar />
      {isRouteErrorResponse(error) ? (
        <Header as="h2">This page does not exist</Header>
      ) : (
        <Header as="h2">An unexpected error occurred</Header>
      )}
    </>
  )
}

export default ErrorPage
