import { createTheme } from '@mui/material'

const rootElement = document.getElementById('root')

export const themes = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#3a115e',
    },
    secondary: {
      main: '#04A777',
    },
    error: {
      main: '#D62828',
    },
    warning: {
      main: '#FB8B24',
    },
    info: {
      main: '#007991',
    },
    success: {
      main: '#0A8754',
    },
  },
  typography: {
    fontFamily: 'Inter Tight',
  },
  shape: {
    borderRadius: 4,
  },
})
