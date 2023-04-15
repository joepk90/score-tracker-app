import SearchIcon from '@mui/icons-material/Search'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AlbumIcon from '@mui/icons-material/Album'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

function getSelected(path: string, paths: string[]) {
  for (let i = 0; i < paths.length; i++) {
    if (path === paths[i]) {
      return i
    }
  }

  return null
}

// TODO REMOVE DUPLICATION (src/components/sidebars/DefaultMenuItems.tsx)
export function MobileBottomNav({ className = '' }: { className?: string }) {
  const router = useRouter()
  const [selected, setSelected] = useState(-1)

  const menuItems = useMemo(
    () => [
      {
        label: `Home`,
        icon: <SearchIcon />,
        path: '/app'
      },
      { label: `Score`, icon: <AlbumIcon />, path: '/app/score' },
      { label: `Profile`, icon: <AccountBoxIcon />, path: '/app/profile' }
    ],
    []
  )

  useEffect(() => {
    const currSelected = getSelected(
      router.asPath,
      menuItems.map((item) => item.path)
    )

    if (currSelected !== -1) {
      setSelected(currSelected)
    }
  }, [router.asPath, menuItems])

  return (
    <BottomNavigation
      value={selected}
      onChange={(_event, newValue) => {
        setSelected(newValue)
        router.push(menuItems[newValue].path)
      }}
      showLabels
      sx={{
        '&.MuiBottomNavigation-root': {
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          width: '100%',
          color: (theme) => theme.palette.text.primary
        }
      }}
      className={className}
    >
      {menuItems.map((item) => (
        <BottomNavigationAction
          key={item.path}
          sx={{
            '&.MuiBottomNavigationAction-root': {
              // color: (theme) => theme.palette.text.primary
            },
            '&:hover': {
              bgcolor: (theme) => theme.palette.action.hover
            },
            '&.Mui-selected': {
              bgcolor: (theme) => theme.palette.action.selected
            }
          }}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  )
}
