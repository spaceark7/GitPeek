import { ThemeProvider, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import NavBar from '../navbar'

import { themes } from '../../theme/themes'
const RootLayout = () => {
  return (
    <ThemeProvider theme={themes}>
      <div className='w-full bg-main-banner bg-cover bg-top bg-no-repeat'>
        <NavBar />
        <main className='mx-auto max-w-screen-xl px-4 md:px-8 '>
          <div className='py-16'>
            <Typography variant='h2' color={'white'} fontWeight={'bold'}>
              Github Peek
            </Typography>
            <Typography className='max-w-xl' gutterBottom variant='h4'>
              A Github profile viewer built with React, Typescript, and Tailwind
              CSS
            </Typography>
            <Typography variant='h6' fontWeight={'normal'}>
              Find github user profiles and their repositories with this app.
            </Typography>
          </div>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default RootLayout
