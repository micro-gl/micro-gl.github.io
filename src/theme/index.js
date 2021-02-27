import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'
import styles from './styles'

const fonts = {  
    heading: "Pixeboy, PressStart2P-Regular, Pixeboy, ConnectionIi,Minecraft, Inter, sans-serif",
    body: "Inter, sans-serif",
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors = {
  black: '#16161D',
  tomer: '#00FF00',
}

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
})

console.log(theme)

export default theme