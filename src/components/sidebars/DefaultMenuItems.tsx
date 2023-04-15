import { AppMenuItem } from 'components/sidebars'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'

// TODO REMOVE DUPLICATION (src/components/MobileBottomNav.tsx)
export function DefaultMenuItems({
  onClick
}: {
  onClick?: (...args: any[]) => void
}) {
  return (
    <>
      <List>
        <AppMenuItem
          link={{ href: '/app' }}
          onClick={onClick}
          icon={
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          }
        >
          Home
        </AppMenuItem>
        <AppMenuItem
          link={{ href: '/app/profile' }}
          onClick={onClick}
          icon={
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
          }
        >
          Profile
        </AppMenuItem>
        <AppMenuItem
          link={{ href: '/app/settings' }}
          onClick={onClick}
          icon={
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          }
        >
          Settings
        </AppMenuItem>
      </List>
    </>
  )
}
