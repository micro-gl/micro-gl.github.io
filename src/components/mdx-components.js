import { chakra, useBreakpointValue, useColorModeValue, Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from './md-href'
import CodeBlock from './code-block'
import BlockQuote from './block-quote'
import Pre from './pre'
import InlineCode from './inline-code'

const components = {
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <chakra.h2 apply="mdx.h2" {...props} />,
  h3: (props) => <chakra.h3 as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <chakra.h4 as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  p: props => <chakra.p {...props} />,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  // pre: props => <Pre {...props} />,
  inlineCode: (props) => (
    <InlineCode {...props} 
                color={useColorModeValue("purple.500", "purple.200")} 
    />
  ),
  code: props => <CodeBlock {...props} />,
  blockquote: props => <BlockQuote {...props} />,
  a: CustomLink,
  TestComponent: dynamic(() => import('./TestComponent')),
  Head,
}

export default components
