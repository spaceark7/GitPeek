import { useTheme } from '@mui/material/styles'
import { Box, Button, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useState } from 'react'

interface Props {
  onSubmitSearch: (username: string) => void
}

export const Search = ({ onSubmitSearch }: Props) => {
  const { palette } = useTheme()
  const [username, setUsername] = useState<string>('')

  const handleSubmit = () => {
    onSubmitSearch(username)
  }

  return (
    <Box className='mb-6 flex flex-col items-center md:flex-row'>
      <TextField
        className='w-full flex-1'
        size='small'
        variant='filled'
        placeholder='Search with username'
        label='Search'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        color='primary'
        sx={{
          '& .MuiFormLabel-root': {
            color: `${palette.primary.main}`,
          },
          '&:hover': {
            backgroundColor: 'white',
          },

          '& .MuiFilledInput-root': {
            backgroundColor: 'white',
            '::placeholder': {
              color: `${palette.primary.main}`,
            },
            '&:hover': {
              backgroundColor: 'white',
            },
            color: `black`,
            '&:active': {
              backgroundColor: 'white',
            },
            '&:focus': {
              backgroundColor: 'white',
            },
          },
        }}
      />
      <Button
        startIcon={<SearchIcon />}
        className='w-full md:w-auto'
        size='large'
        variant='contained'
        color='primary'
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Box>
  )
}
