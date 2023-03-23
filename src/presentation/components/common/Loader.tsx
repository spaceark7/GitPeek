import { Box, CircularProgress } from '@mui/material'
import React from 'react'

interface Props {
  title: string
}
const Loader = ({ title }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color='secondary' className='mr-2' /> {title}
    </Box>
  )
}

export default Loader
