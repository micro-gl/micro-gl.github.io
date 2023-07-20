import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
// import renderToString from 'next-mdx-remote/render-to-string'
import { serialize } from 'next-mdx-remote/serialize'
import components from '../components/mdx-components'
import yaml from 'js-yaml'

const import_folder = function(folder_path) {
  let doc = undefined
  try {
    doc = yaml.load(fs.readFileSync(path.join(folder_path, 'index.yaml'), 'utf8'));
    // console.log(doc);
  } catch (e) {
    console.error(e);
  }

  const paths = doc.groups.map(group => group.items).flat() 
  let __map = {}
  paths.forEach(item => {
    if(__map[item.route]!==undefined)
      console.log(`processor warning:: route ${item.route} is overriden`)
    __map[item.route] = item.path
  })
  // __map[""] = document.groups[0].items[0].path
  // __map["/"] = document.groups[0].items[0].path
  // __map["b"] = document.groups[0].items[0].path
  return { ...doc, __map }
}

export const _getStaticProps = async (path_of_content_folder, { params }) => {
  // console.log('getStaticProps')
  const docs = import_folder(path.join(process.cwd(), path_of_content_folder))
  const { slug } = params
  const route = slug ? slug.reduce((acc, curr) => path.join(acc, curr), '') : 
                                                    docs.groups[0].items[0].route
  const path_of_file = docs.__map[route]
  const source = fs.readFileSync(path_of_file)
  const { content, data } = matter(source)
  // const mdxSource = await renderToString(content, {
  const mdxSource = await serialize(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  }) 
  // console.log(docs)

  return {
    props: {
      data : {
        logo: docs.logo,
        slug : route,
        content: mdxSource,
        frontMatter: data,
        document: docs  
      }
    },
  }
}

export const _getStaticPaths = async (path_of_content_folder) => {
  // console.log('creating docs pages')
  const docs = import_folder(path.join(process.cwd(), path_of_content_folder))
  const to_optional = (path) => path.replace(/\.mdx?$/, '').split('/')
  const paths = Object.keys(docs.__map)
                       .map(item => (
                        { params: { 
                            slug: to_optional(item),
                          }}));
  paths.push({ params: { 
    slug: [""],
  }})

  return {
    paths,
    fallback: false,
  }
}
