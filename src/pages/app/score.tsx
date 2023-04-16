import React, { useState } from 'react'
import { Box } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import Slider from '@mui/material/Slider'
import { useCreateScoreMutation } from 'services/scoreApiSlice'
import { useRouter } from 'next/router'

const Score = () => {
  const [score, setScore] = useState<number>(50)
  const [createScore] = useCreateScoreMutation()
  const router = useRouter()

  const handleOnScoreChange = async (e: Event, value: number | number[]) => {
    // TODO review this line - why is the range slider wanting to return a number[] ?
    const number = Array.isArray(value) ? value[0] : value

    setScore(number)
    try {
      // const { data, loading, error } =
      await createScore({
        number
      })

      router.push('/app/')
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <>
      <ShellTitle title="Score" />
      <Box
        m={2}
        pt={2}
        pb={2}
        sx={{ height: '85vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ height: '70vh' }}>
          <Slider
            onChange={handleOnScoreChange}
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical'
              }
            }}
            orientation="vertical"
            defaultValue={50}
            aria-label="Temperature"
            valueLabelDisplay="auto"
            value={score}
            //   onKeyDown={preventHorizontalKeyboardNavigation}
          />
        </Box>
      </Box>
    </>
  )
}

Score.layout = AppLayout

export default Score
