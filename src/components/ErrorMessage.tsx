import { Grid, Message } from 'semantic-ui-react'

interface ErrorMessageProps {
  error: string
}
const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Grid centered>
      <Grid.Column>
        <Message negative content={error} />
      </Grid.Column>
    </Grid>
  )
}

export default ErrorMessage
