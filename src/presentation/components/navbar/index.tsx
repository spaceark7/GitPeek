import { AppBar, Container, Toolbar, Typography } from '@mui/material'

import { GitHub } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar
      className='bg-transparent backdrop-blur-lg'
      elevation={0}
      position='sticky'
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <GitHub sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to='/'>
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Git Peek
            </Typography>
          </Link>

          <GitHub sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link to='/'>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Git Peek
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
