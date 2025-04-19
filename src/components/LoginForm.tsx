import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form, FormField, Grid, Icon, Input } from 'semantic-ui-react'
import { useAuth } from '../hooks/useAuth'
import ErrorMessage from './ErrorMessage'
import LoadingSpinner from './LoadingSpinner'

const LoginForm = () => {
  const { login, isPending: isLoading, loginForm, setLoginForm } = useAuth()
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
    <Container className="login">
      <Grid centered>
        <Grid.Column mobile={16} tablet={10} computer={6}>
          <Form onSubmit={handleSubmit}>
            {isLoading ? (
              <LoadingSpinner text="Logging in..." />
            ) : (
              <>
                <Grid centered>
                  <Grid.Column width={9}>
                    <FormField required>
                      <Input
                        icon="user"
                        placeholder="Username"
                        name="username"
                        value={username}
                        required
                        aria-required="true"
                        onChange={handleChange}
                      />
                    </FormField>

                    <FormField required>
                      <Input
                        icon="lock"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </FormField>
                  </Grid.Column>
                </Grid>
                <Grid centered>
                  <Grid.Column width={5}>
                    <Button
                      basic
                      className="login-button"
                      icon
                      labelPosition="right"
                      type="submit"
                      fluid
                      aria-label="Login to your account">
                      Login
                      <Icon name="chevron right" className="btn-icon" />
                    </Button>
                  </Grid.Column>
                </Grid>
                {error && <ErrorMessage error={error} />}
              </>
            )}
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default LoginForm
