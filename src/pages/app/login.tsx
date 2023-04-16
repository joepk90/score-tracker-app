import { Box, Paper } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import LoginForm from 'components/LoginForm'

const Login = () => {
  return (
    <>
      <ShellTitle title="Login" />
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <LoginForm />
        </Box>
      </Paper>
    </>
  )
}

Login.layout = AppLayout

export default Login
