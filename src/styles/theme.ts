import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '500': '#999999',
      '600': '#47585B',
      '100': '#DADADA',
      '50': '#F5F8FA'
    },
    yellow: {
      '100': 'rgba(255, 186, 8, 0.5)',
      '500': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
})