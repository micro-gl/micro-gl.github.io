import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../src/components/Layout'
import SideBar from '../src/components/side-bar'
import Header from '../src/components/header'
import { useColorMode, Switch, Stack, Box, BoxProps } from '@chakra-ui/react'

// import { postFilePaths, POSTS_PATH } from '../src/utils/mdxUtils'
import { docs } from '../src/utils/mdxUtils'
let l2 = (v) => console.log(v)

export default function Index( props ) {
  const { name, groups } = props
  return (
    "index"
  )
}

export function getStaticProps() {
  const content = docs.groups

  return { props: { ...docs } }
}
