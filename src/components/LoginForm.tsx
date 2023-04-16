import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  TextField,
  CardContent,
  Button,
  Box,
  Card,
  CardHeader,
  Divider,
  Grid
} from '@mui/material'
import { useLoginMutation } from 'services/authApiSlice'
import { setCredentials } from 'store/authSlice'
import { useAppDispatch } from 'store/store'

const LoginForm = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [login] = useLoginMutation()

  const handleLoginSubmit = async () => {
    try {
      const tokens = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...tokens }))
      router.push('/app/')
    } catch (error) {
      console.log(error)
      // TODO setup error warning
    }
  }

  return (
    <form autoComplete="off">
      <Card>
        <CardHeader
          subheader="Login, or click here to register"
          title="Login"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                required
                variant="outlined"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                required
                variant="outlined"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleLoginSubmit}
          >
            Login
          </Button>
        </Box>
      </Card>
    </form>
  )
}

export default LoginForm
