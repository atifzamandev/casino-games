import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      {isRouteErrorResponse(error) ? (
        <Header as="h2">This page does not exist</Header>
      ) : (
        <Header as="h2">An unexpected error occurred</Header>
      )}
    </>
  )
}

export default ErrorPage
