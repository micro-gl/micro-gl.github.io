import fs from 'fs'
import path from 'path'
import docs_config from "../../content/docs/docs-config";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'content', 'docs')
export const CONTENT_PATH = path.join(process.cwd(), 'content')

 
// console.log(docs)

export const docs = docs_config('content/docs/')
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
