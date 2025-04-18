import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoadingSpinner = ({ text }: { text: string }) => {
  return (
    <Segment className="login-loading-segment">
      <Dimmer active inverted className="login-loading-dimmer">
        <Loader inverted size="large">
          {text}
        </Loader>
      </Dimmer>
    </Segment>
  )
}

export default LoadingSpinner
