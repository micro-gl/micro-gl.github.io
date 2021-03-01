import { chakra, useBreakpointValue, useColorModeValue, Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from './md-href'
import CodeBlock from './code-block'
import BlockQuote from './block-quote'
import Pre from './pre'
import InlineCode from './inline-code'

const components = {
  h1: (props) => <chakra.h1 {...props} />,
  h2: (props) => <chakra.h2  {...props} />,
  h3: (props) => <chakra.h3 as="h3"  {...props} />,
  h4: (props) => <chakra.h4 as="h4"  {...props} />,
  hr: (props) => <chakra.hr {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  br: (props) => <Box as="div" {...props} />,
  p: props => <chakra.p {...props} />,
  a: (props) => <chakra.a  {...props} />,
  p: (props) => <chakra.p  {...props} />,
  ul: (props) => <chakra.ul  {...props} />,
  ol: (props) => <chakra.ol  {...props} />,
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
