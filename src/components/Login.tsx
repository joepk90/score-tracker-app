import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { setCredentials, logout, selectAccessToken } from 'store/authSlice'
import { store } from 'store/store'
import { useLoginMutation } from 'services/authApiSlice'

const Login = () => {
  const [login, { isLoading }] = useLoginMutation()

  const authState = selectAccessToken(store.getState())

  const credentials = {
    email: process.env.NEXT_PUBLIC_TEMP_USER_EMAIL as string,
    password: process.env.NEXT_PUBLIC_TEMP_USER_PASSWORD as string
  }

  const handleLoginSubmit = async () => {
    try {
      const tokens = await login(credentials).unwrap()
      store.dispatch(setCredentials({ ...tokens }))
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return <></>
  }

  // TODO ERROR: component not updating after state change...
  return (
    <>
      {authState === null ? (
        <ListItem button component="a" onClick={handleLoginSubmit}>
          <ListItemText>Login</ListItemText>
        </ListItem>
      ) : (
        <ListItem button component="a" onClick={() => store.dispatch(logout())}>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      )}
    </>
  )
}

export default Login
