import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import theme from '../src/theme'
import Fonts from '../src/components/font-face'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp