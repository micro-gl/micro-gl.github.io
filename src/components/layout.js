import matter from 'gray-matter'
import SideBar from './side-bar'
import Header from './header'
import Copyright from './copyright'
import { Flex, Box, chakra, Center } from '@chakra-ui/react'
import { useBreakpointValue, useStyles, useColorModeValue } from '@chakra-ui/react'
import { Fade, Slide } from '@chakra-ui/transition'
import useToggle from '../hooks/useToggle'
import colors from '../theme/colors'

export default function Layout( props ) {
  let { data, widthSide, widthContent, header_prefix, github_link } = props
  let { slug, content, document, frontMatter } = data
  let { name, groups } = document
  const { title, description } = frontMatter
  const headerHeight = "70px"
  const plSide = 0
  const small_screen = useBreakpointValue({ base: true, sm: false})
  const is_dark_mode = useColorModeValue(false, true)
  const pl = small_screen ? "0px" : "60px"
  widthContent = small_screen ? "100%" : widthContent
  const widthAll = `calc(${widthSide} + ${widthContent} + ${pl} + 100px)`
  const [menu, toggleMenu] = useToggle(false)
  if(menu && !small_screen) toggleMenu()
  return (
    <>
      <Header boxShadow="sm" w="100%" slug={slug} prefix={header_prefix}
              h={headerHeight} widthAll={widthAll} widthSide={widthSide} 
              plSide={plSide} onMenuClick={toggleMenu} 
              github_link={github_link} />

      {
      // !menu && 
        <Flex as="main" direction="row" justifyContent="center" 
                mx={2} w="auto"
                h={`calc(100vh - ${headerHeight})`} >

          {!small_screen && 
          <SideBar pl={0} pt={1} mr={pl}
                  w={widthSide} h="100%" 
                  groupFontSize="1.2rem" itemFontSize="1.0rem"
                  selectedSlug={slug}
                  groups={groups} name={name} />}

          <Box h="100%"  pt={0} mt={0} px={2} id="content"
              w={widthContent} overflowY="auto" className="mdx">
            <h1>{ title }</h1>
            { content }
            <Copyright w='100%'/>
            {/* <Center w='100%' pt={10} pb={10} fontSize="md">
              {`All Rights Reserved, Tomer Shalev, (2020-${new Date().getFullYear()})`}
            </Center> */}
          </Box>
        </Flex>}
    
      { 
        // <Fade in={menu} out={!menu}>bg={colors(is_dark_mode).bg}
        <Slide in={menu} direction="right" 
            style={{ zIndex: 100, position: 'absolute', top: headerHeight, left: '0px' }}>
          <SideBar px={2} pt={1} bg={colors(is_dark_mode).bg}
                  w="100%" h="100vh" 
                  groupFontSize="1.2rem" itemFontSize="1.0rem"
                  selectedSlug={slug}
                  groups={groups} name={name} onSelect={toggleMenu}  />
        </Slide>
      }

    </>
  )
}

