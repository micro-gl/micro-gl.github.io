import components from '../../../src/components/mdx-components'
import Layout from '../../../src/components/layout'
import hydrate from 'next-mdx-remote/hydrate'
import { _getStaticProps, _getStaticPaths } from '../../../src/utils/next_props'

export default function PostPage( props ) {
  const { data } = props
  const data_ = { ...data, content : hydrate(data.content, { components })}
  return (
    <Layout data={data_} header_prefix="[micro{gl}]" widthSide="180px" widthContent="800px"/>
  )
}

export const getStaticProps = async ({ params }) => {
  console.log('getStaticProps')
  return _getStaticProps('content/docs/microgl', {params})
}

export const getStaticPaths = async () => {
  console.log('creating docs pages')
  return _getStaticPaths('content/docs/microgl')
}
