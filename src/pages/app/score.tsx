import { Box } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import Slider from '@mui/material/Slider'

const Score = () => {
  return (
    <>
      <ShellTitle title="Score" />
      <Box m={2} pt={2} pb={2}>
        <Box sx={{ height: '80vh' }} display="flex" justifyContent="center">
          <Slider
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical'
              }
            }}
            orientation="vertical"
            defaultValue={50}
            aria-label="Temperature"
            valueLabelDisplay="auto"
            //   onKeyDown={preventHorizontalKeyboardNavigation}
          />
        </Box>
      </Box>
    </>
  )
}

Score.layout = AppLayout

export default Score
