import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { AppLayout } from 'components/layout'
import { Actions, useAppShell } from 'components/providers/AppShellProvider'
import Hidden from '@mui/material/Hidden'
import Switch from '@mui/material/Switch'
import { ThemeSwitch } from 'components/ThemeSwitch'
import { ShellTitle } from 'components'

export default function Settings() {
  return <MainContent />
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
      <ShellTitle title="Settings" />
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <Box m={2}>
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
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <Typography component="p">App version: {__VERSION__}</Typography>
          <Typography component="p">Commit sha: {__COMMIT_SHA__}</Typography>
          <Typography component="p">Build date: {__BUILD_DATE__}</Typography>
          <Typography component="p">Branch: {__BRANCH__}</Typography>
          <Typography component="p">
            Commit Message: {__COMMIT_MESSAGE__}
          </Typography>
          <Typography component="p">
            Repository: {''}
            <a href="https://github.com/joepk90/nextjs-material-pwa-base">
              https://github.com/joepk90/nextjs-material-pwa-base
            </a>
          </Typography>
        </Box>
      </Paper>
    </>
  )
}

Settings.layout = AppLayout

// Settings.desktopSidebar = function SettingsMenuDesktop(
//   defaultItems: ReactNode
// ) {
//   return (
//     <>
//       <List>{defaultItems}</List>
//       <Divider />
//       <List>
//         <MobileMenuItem
//           icon={
//             <ListItemIcon>
//               <AccountBoxIcon />
//             </ListItemIcon>
//           }
//           link={{ href: '/app/settings?section=profile', shallow: true }}
//         >
//           Profile
//         </MobileMenuItem>
//       </List>
//     </>
//   )
// }

// Settings.mobileSidebar = function SettingsMenuMobile(defaultItems: ReactNode) {
//   return (
//     <>
//       <List>{defaultItems}</List>
//       <Divider />
//       <List>
//         <MobileMenuItem
//           icon={
//             <ListItemIcon>
//               <AccountBoxIcon />
//             </ListItemIcon>
//           }
//           link={{ href: '/app/settings?section=profile', shallow: true }}
//         >
//           Profile
//         </MobileMenuItem>
//       </List>
//     </>
//   )
// }
