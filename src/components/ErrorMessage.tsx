import { Grid, GridColumn, Message } from 'semantic-ui-react'

interface ErrorMessageProps {
  errorMessage: string
}
const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <Grid centered>
      <GridColumn>
        <Message negative content={errorMessage} />
      </GridColumn>
    </Grid>
  )
}

export default ErrorMessage
