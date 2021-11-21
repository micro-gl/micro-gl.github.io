import { mode } from '@chakra-ui/theme-tools'
import mdx_style from './mdx-style'
import colors from './colors'

const styles = {
  global: (props) => ({

    body: {
      ...colors(mode(false, true)(props)),
      fontSize: "md",

    },
    ".mdx": mdx_style
  })
}

export default styles