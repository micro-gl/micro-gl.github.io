import components from '../../../src/components/mdx-components'
import Layout from '../../../src/components/layout'
import { MDXRemote } from 'next-mdx-remote'
import { _getStaticProps, 
  _getStaticPaths } from '../../../src/utils/next_props'
import ClientOnly from '../../../src/components/client-only'

export default function PostPage( props ) {
  const { data } = props
  const data_ = { 
    ...data, 
    content : <MDXRemote {...data.content} components={components} /> 
  }

  return (
    <ClientOnly>
      <Layout data={data_} header_prefix="[micro{gl}]" 
              github_link='https://github.com/micro-gl/micro-gl'/>
    </ClientOnly>
  )
}

export const getStaticProps = async ({ params }) => {
  // console.log('getStaticProps')
  return _getStaticProps('content/docs/microgl', {params})
}

export const getStaticPaths = async () => {
  // console.log('creating docs pages')
  return _getStaticPaths('content/docs/microgl')
}
