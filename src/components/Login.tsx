import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { setCredentials, logout, selectAccessToken } from 'store/authSlice'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'
import { useLoginMutation } from 'services/authApiSlice'

const Login = () => {
  const [
    login
    // { isLoading }
  ] = useLoginMutation()
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector((state: RootState) =>
    selectAccessToken(state)
  )

  const credentials = {
    email: process.env.NEXT_PUBLIC_TEMP_USER_EMAIL as string,
    password: process.env.NEXT_PUBLIC_TEMP_USER_PASSWORD as string
  }

  const handleLoginSubmit = async () => {
    try {
      const tokens = await login(credentials).unwrap()
      dispatch(setCredentials({ ...tokens }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {accessToken === null ? (
        <ListItem button component="a" onClick={handleLoginSubmit}>
          <ListItemText>Login</ListItemText>
        </ListItem>
      ) : (
        <ListItem button component="a" onClick={() => dispatch(logout())}>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      )}
    </>
  )
}

export default Login
