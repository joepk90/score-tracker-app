import { Box, Paper } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import SettingsProfile from 'components/SettingsProfile'

const Profile = () => {
  return (
    <>
      <ShellTitle title="Home" />
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <SettingsProfile />
        </Box>
      </Paper>
    </>
  )
}

Profile.layout = AppLayout

export default Profile
