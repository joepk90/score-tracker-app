import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
export default function AppIndex() {
  return (
    <>
      <ShellTitle title="Home" />
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <Box m={2}>
            <Typography variant="h6">Home</Typography>
          </Box>
          <Box m={2} display="flex" justifyContent="center">
            <Chart
              options={{
                chart: {
                  id: 'basic-bar'
                },
                xaxis: {
                  categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
                }
              }}
              series={[
                {
                  name: 'series-1',
                  data: [30, 40, 45, 50, 49, 60]
                }
              ]}
              type="bar"
              width="300"
            />
          </Box>
        </Box>
      </Paper>
    </>
  )
}

AppIndex.layout = AppLayout
