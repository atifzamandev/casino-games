import { Container, Image } from 'semantic-ui-react'
import comeonLogo from '../assets/images/logo.svg'

const ComeonLogo = () => (
  <Container>
    <Image src={comeonLogo} alt='Comeon Logo' centered loading='lazy' />
  </Container>
)

export default ComeonLogo
