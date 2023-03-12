import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from './md-href'
import CodeBlock from './code-block'
import BlockQuote from './block-quote'

const components = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2  {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4  {...props} />,
  hr: (props) => <hr {...props} />,
  strong: (props) => <strong fontWeight="semibold" {...props} />,
  br: (props) => <div {...props} />,
  p: props => <p {...props} />,
  a: (props) => <a  {...props} />,
  p: (props) => <p  {...props} />,
  ul: (props) => <ul  {...props} />,
  ol: (props) => <ol  {...props} />,
  li: (props) => <li className='pb-4' {...props} />,
  pre: props => <CodeBlock {...props} />,
  code: props => <code className='inline --bg-white text-pink-600' {...props} />,
  blockquote: props => <BlockQuote {...props} />,
  a: CustomLink,
  // TestComponent: dynamic(() => import('./TestComponent')),
  Head,
}

export default components
