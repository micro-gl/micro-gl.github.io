import { mode } from '@chakra-ui/theme-tools'
import mdx_style from './mdx-style'

const styles = {
  global: (props) => ({

    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("whiteAlpha.900", "gray.800")(props),
      fontSize: "md",

    },
    ".mdx": mdx_style
  })
}

export default styles