import { AppMenuItem } from 'components/sidebars'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import SettingsIcon from '@mui/icons-material/Settings'
import AlbumIcon from '@mui/icons-material/Album'

type DefaultMenuItemsProps = {
  onClick?: () => void
}

// TODO REMOVE DUPLICATION (src/components/MobileBottomNav.tsx)
const DefaultMenuItems = ({ onClick }: DefaultMenuItemsProps) => {
  return (
    <>
      <List>
        <AppMenuItem
          link={{ href: '/app' }}
          onClick={onClick}
          icon={
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
          }
        >
          Home
        </AppMenuItem>
        <AppMenuItem
          link={{ href: '/app/score' }}
          onClick={onClick}
          icon={
            <ListItemIcon>
              <AlbumIcon />
            </ListItemIcon>
          }
        >
          Score
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

export default DefaultMenuItems
