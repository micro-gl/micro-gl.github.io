import matter from 'gray-matter'
import SideBar from './side-bar'
import Header from './header'
import { Flex, Box } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import useToggle from '../hooks/useToggle'

export default function Layout( props ) {
  let { data, widthSide, widthContent } = props
  let { slug, content, document, frontMatter } = data
  let { name, groups } = document
  const { title, description } = frontMatter
  const headerHeight = "70px"
  const plSide = 0
  const small_screen = useBreakpointValue({ base: true, sm: false})
  const pl = small_screen ? "0px" : "60px"
  widthContent = small_screen ? "100%" : widthContent
  const widthAll = `calc(${widthSide} + ${widthContent} + ${pl} + 100px)`
  const [menu, toggleMenu] = useToggle(false)

  return (
    <>
      <Header boxShadow="sm" w="100%" slug={slug}
              h={headerHeight} widthAll={widthAll} widthSide={widthSide} 
              plSide={plSide} onMenuClick={toggleMenu} />

      {!menu && 
          <Flex as="main" direction="row" justifyContent="center" 
                mx={2} w="auto"
                h={`calc(100vh - ${headerHeight})`} >

        {!small_screen && 
          <SideBar pl={0} pt={1} mr={pl}
                w={widthSide} h="100%" 
                groupFontSize="1.2rem" itemFontSize="1.0rem"
                selectedSlug={slug}
                groups={groups} name={name} />}

        <Box  h="100%"  mt={4} px={6}
              w={widthContent}
              overflowY="auto" className="mdx-prose">
          <h1>{ title }</h1>
          { content }
        </Box>

      </Flex>}
    
      {
        menu &&
        <SideBar px={2} pt={1}
                w="100%" h="100%" overflowY="auto"
                groupFontSize="1.2rem" itemFontSize="1.0rem"
                selectedSlug={slug}
                groups={groups} name={name} />
      }

    </>
  )
}

