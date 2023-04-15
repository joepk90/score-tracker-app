import AccountBoxIcon from '@mui/icons-material/AccountBox'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { SettingsProfile, ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import { MobileMenuItem } from 'components/sidebars'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Actions, useAppShell } from 'components/providers/AppShellProvider'
import Hidden from '@mui/material/Hidden'
import Switch from '@mui/material/Switch'
import { ThemeSwitch } from 'components/ThemeSwitch'

export default function Settings() {
  const router = useRouter()

  return (
    <>
      {router.query.section === 'profile' ? (
        <SettingsProfile />
      ) : (
        <MainContent />
      )}
    </>
  )
}

const MainContent = () => {
  const { state, dispatch } = useAppShell()

  const toggleBottomNav = () => {
    dispatch({
      type: Actions.SHOW_BOTTOM_NAV,
      payload: !state.showBottomNav
    })
  }
  const toggleTheme = () => {
    dispatch({
      type: Actions.SET_THEME,
      payload: state.theme === 'dark' ? 'light' : 'dark'
    })
  }

  return (
    <>
      <Paper>
        <ShellTitle title="Settings" />
        <Box p={2}>
          <Box m={2} pt={2} pb={2}>
            <Typography variant="h6">Settings</Typography>
          </Box>
          <List>
            <ListItem>
              <ListItemText
                id="switch-list-label-nightode"
                primary="Dark Mode"
              />
              <ThemeSwitch
                checked={state.theme === 'dark'}
                onChange={toggleTheme}
              />
            </ListItem>
            <Hidden mdUp implementation="js">
              <ListItem>
                <ListItemText
                  id="switch-list-label-bottom-nav"
                  primary="Bottom Nav"
                />
                <Switch
                  checked={state.showBottomNav}
                  onChange={toggleBottomNav}
                  name="checkedB"
                  color="secondary"
                />
              </ListItem>
            </Hidden>
          </List>
        </Box>
      </Paper>
    </>
  )
}

Settings.layout = AppLayout

Settings.desktopSidebar = function SettingsMenuDesktop(
  defaultItems: ReactNode
) {
  return (
    <>
      <List>{defaultItems}</List>
      <Divider />
      <List>
        <MobileMenuItem
          icon={
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
          }
          link={{ href: '/app/settings?section=profile', shallow: true }}
        >
          Profile
        </MobileMenuItem>
      </List>
    </>
  )
}

Settings.mobileSidebar = function SettingsMenuMobile(defaultItems: ReactNode) {
  return (
    <>
      <List>{defaultItems}</List>
      <Divider />
      <List>
        <MobileMenuItem
          icon={
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
          }
          link={{ href: '/app/settings?section=profile', shallow: true }}
        >
          Profile
        </MobileMenuItem>
      </List>
    </>
  )
}
