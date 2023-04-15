import MenuCloseIcon from '@mui/icons-material/ArrowBack'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Actions, useAppShell } from 'components/providers/AppShellProvider'

export function AppToolbar() {
  const theme = useTheme()

  const { state, dispatch } = useAppShell()

  const openMobileDrawer = () => {
    dispatch({ type: Actions.MOBILE_DRAWER_IS_OPEN, payload: true })
  }

  const toggleDesktopDrawer = () => {
    dispatch({
      type: Actions.DESKTOP_DRAWER_IS_OPEN,
      payload: !state.desktopDrawerIsOpen
    })
  }

  return (
    <AppBar
      color={theme.palette.mode === 'light' ? 'primary' : 'default'}
      position="fixed"
      elevation={0}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={openMobileDrawer}
            sx={{
              mr: 2,
              display: {
                md: 'none'
              }
            }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDesktopDrawer}
            sx={{
              mr: 2,
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
            size="large"
          >
            {state.desktopDrawerIsOpen ? <MenuCloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap sx={{ mr: 'auto' }}>
            {state.title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
