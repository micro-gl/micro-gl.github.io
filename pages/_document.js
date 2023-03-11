import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// import { ColorModeScript } from '@chakra-ui/react'
// import theme from '../src/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}