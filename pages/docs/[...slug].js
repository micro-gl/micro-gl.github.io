import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import components from '../../src/components/mdx-components'
import Layout from '../../src/components/layout'
import import_folder from '../../src/utils/folder'

export default function PostPage( props ) {
  const { data } = props
  const data_ = { ...data, content : hydrate(data.content, { components })}
  return (
    <Layout data={data_} widthSide="180px" widthContent="630px"/>
  )
}

export const getStaticProps = async ({ params }) => {
  console.log('getStaticProps')
  // console.log(params)
  const docs = import_folder(path.join(process.cwd(), 'content', 'docs'))
  const { slug } = params
  const route = slug.reduce((acc, curr) => path.join(acc, curr), '')
  const path_of_file = docs.__map[route]
  const source = fs.readFileSync(path_of_file)
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  }) 

  return {
    props: {
      data : {
        slug : route,
        content: mdxSource,
        frontMatter: data,
        document: docs  
      }
    },
  }
}

export const getStaticPaths = async () => {
  console.log('paths2')
  const docs = import_folder(path.join(process.cwd(), 'content', 'docs'))
  const to_optional = (path) => {
    return path.replace(/\.mdx?$/, '').split('/')
  }

  const paths = Object.keys(docs.__map)
                       .map(item => (
                        { params: { 
                            slug: to_optional(item),
                          }}))
  // console.log(docs)
 
  return {
    paths,
    fallback: false,
  }
}
