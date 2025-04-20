import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form, FormField, Grid, GridColumn, Icon, Input } from 'semantic-ui-react'
import { useAuth } from '../../hooks/useAuth'
import ErrorMessage from '../ErrorMessage'
import LoadingSpinner from '../LoadingSpinner'
import './LoginForm.css'

const LoginForm = () => {
  const { login, isPending: isLoggingIn, loginForm, setLoginForm } = useAuth()
  const { username, password } = loginForm
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginForm((loginInfo) => ({ ...loginInfo, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    try {
      await login({ username, password })
      navigate('/games')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unexpected error occurred')
      }
    }
  }

  return (
    <Container className='login'>
      <Grid centered>
        <GridColumn mobile={16} tablet={10} computer={6}>
          <Form onSubmit={handleSubmit}>
            {isLoggingIn ? (
              <LoadingSpinner text='Logging in...' />
            ) : (
              <>
                <Grid centered>
                  <GridColumn width={9}>
                    <FormField required>
                      <Input
                        icon='user'
                        placeholder='Username'
                        name='username'
                        value={username}
                        required
                        aria-required='true'
                        onChange={handleChange}
                      />
                    </FormField>

                    <FormField required>
                      <Input
                        icon='lock'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        required
                        aria-required='true'
                      />
                    </FormField>
                  </GridColumn>
                </Grid>
                <Grid centered>
                  <GridColumn width={5}>
                    <Button
                      basic
                      className='login-button'
                      icon
                      labelPosition='right'
                      type='submit'
                      fluid
                      aria-label='Login to your account'>
                      Login
                      <Icon name='chevron right' className='btn-icon' />
                    </Button>
                  </GridColumn>
                </Grid>
                {error && <ErrorMessage errorMessage={error} />}
              </>
            )}
          </Form>
        </GridColumn>
      </Grid>
    </Container>
  )
}

export default LoginForm
