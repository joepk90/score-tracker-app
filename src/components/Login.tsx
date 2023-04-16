import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { AppMenuItem } from 'components/sidebars'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { logout, selectAccessToken } from 'store/authSlice'
import { RootState, useAppDispatch, useAppSelector } from 'store/store'

type DefaultMenuItemsProps = {
  onClick?: () => void
}

const Login = ({ onClick }: DefaultMenuItemsProps) => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector((state: RootState) =>
    selectAccessToken(state)
  )

  const handleLogout = () => {
    dispatch(logout())
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <>
      {accessToken ? (
        <ListItem button component="a" onClick={handleLogout}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      ) : (
        <AppMenuItem
          link={{ href: '/app/login' }}
          onClick={onClick}
          icon={
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
          }
        >
          Login
        </AppMenuItem>
      )}
    </>
  )
}

export default Login
