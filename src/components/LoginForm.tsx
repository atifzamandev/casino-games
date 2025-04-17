import { Button, Container, Form, FormField, Grid, Icon, Input } from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Container className="login">
      <Grid centered>
        <Grid.Column mobile={16} tablet={10} computer={6}>
          <Form>
            <Grid centered>
              <Grid.Column width={9}>
                <FormField required>
                  <Input icon="user" placeholder="Username" name="username" required aria-required="true" />
                </FormField>

                <FormField required>
                  <Input
                    icon="lock"
                    placeholder="Password"
                    type="password"
                    name="password"
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
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default LoginForm
