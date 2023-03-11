// import matter from 'gray-matter'
import SideBar from './side-bar'
import Header from './header'
// import Copyright from './copyright'
// import { Flex, Box, chakra, Center } from '@chakra-ui/react'
// import { useBreakpointValue, useStyles, useColorModeValue } from '@chakra-ui/react'
// import { Fade, Slide } from '@chakra-ui/transition'
import useToggle from '../hooks/useToggle'
// import colors from '../theme/colors'
import {useCallback, useEffect, useRef } from 'react'


export default function Layout( props ) {
  let { data, widthSide, widthContent, header_prefix, github_link } = props
  let { slug, content, document, frontMatter } = data
  let { name, groups } = document
  const { title, description } = frontMatter
  // const headerHeight = "70px"
  // const plSide = 0
  // const small_screen = useBreakpointValue({ base: true, sm: false})
  // const is_dark_mode = useColorModeValue(false, true)
  // const pl = small_screen ? "0px" : "60px"
  // widthContent = small_screen ? "100%" : widthContent
  // const widthAll = `calc(${widthSide} + ${widthContent} + ${pl} + 100px)`
  const [menu, toggleMenu] = useToggle(false)
  // if(menu && !small_screen) toggleMenu()
  // const myRef = useRef(null)
  // useEffect(() => {myRef.current.scrollTo(0,0)}, [slug])
  // useEffect(() => {console.log(menu)})
  // console.log(menu)
  return (
    <div className='w-full h-screen flex flex-col font-open_sans'>
      <Header className='shadow-sm --bg-gray-400 flex-shrink-0 w-full h-[70px] ' 
              slug={slug} prefix={header_prefix}
              onMenuClick={toggleMenu} 
              github_link={github_link} />

      <main className='flex flex-row justify-center w-full overflow-auto flex-1 '>
        <SideBar className='w-52 h-full overflow-auto pt-1 flex-shrink-0'
                  groupFontSize="1.2rem" itemFontSize="0.9rem"
                  selectedSlug={slug}
                  groups={groups} name={name} />
        <div className='overflow-auto w-full max-w-[800px] h-full --bg-green-400'>
          <div className='w-full px-2 md:px-5 max-h-full mdx --bg-green-400'
                children={content} />
        </div>
      </main>
      
    </div>
  )
}


// export default function Layout( props ) {
//   let { data, widthSide, widthContent, header_prefix, github_link } = props
//   let { slug, content, document, frontMatter } = data
//   let { name, groups } = document
//   const { title, description } = frontMatter
//   const headerHeight = "70px"
//   const plSide = 0
//   const small_screen = useBreakpointValue({ base: true, sm: false})
//   const is_dark_mode = useColorModeValue(false, true)
//   const pl = small_screen ? "0px" : "60px"
//   widthContent = small_screen ? "100%" : widthContent
//   const widthAll = `calc(${widthSide} + ${widthContent} + ${pl} + 100px)`
//   const [menu, toggleMenu] = useToggle(false)
//   if(menu && !small_screen) toggleMenu()
//   const myRef = useRef(null)
//   useEffect(() => {myRef.current.scrollTo(0,0)}, [slug])
//   useEffect(() => {console.log(menu)})
//   console.log(menu)
//   return (
//     <>
//       <Header boxShadow="sm" w="100%" slug={slug} prefix={header_prefix}
//               h={headerHeight} widthAll={widthAll} widthSide={widthSide} 
//               plSide={plSide} onMenuClick={toggleMenu} 
//               github_link={github_link} />

//       {
//       // !menu && 
//         <Flex as="main" direction="row" justifyContent="center" 
//                 mx={2} w="auto"
//                 h={`calc(100vh - ${headerHeight})`} >

//           {!small_screen && 
//           <SideBar pl={0} pt={1} mr={pl}
//                   w={widthSide} h="100%" 
//                   groupFontSize="1.2rem" itemFontSize="0.9rem"
//                   selectedSlug={slug}
//                   groups={groups} name={name} />}

//           <Box h="100%"  pt={0} mt={0} px={2} id="content" id='_content'
//               w={widthContent} overflowY="auto" className="mdx" ref={myRef}>
//             <h1>{ title }</h1>
//             { content }
//             <Copyright w='100%'/>
//             {/* <Center w='100%' pt={10} pb={10} fontSize="md">
//               {`All Rights Reserved, Tomer Shalev, (2020-${new Date().getFullYear()})`}
//             </Center> */}
//           </Box>
//         </Flex>}
    
//       { menu && 
//         // <Fade in={menu} out={!menu}>bg={colors(is_dark_mode).bg}
//         <Slide in={menu} direction="right" 
//             style={{ zIndex: 100, top: headerHeight, 
//             width:"100%", height:`calc(100vh - ${headerHeight})` }}>
//           {<SideBar px={2} pt={1} bg={colors(is_dark_mode).bg}
//                   w="100%" h='100%'
//                   groupFontSize="1.2rem" itemFontSize="1.0rem"
//                   selectedSlug={slug}
//                   groups={groups} name={name} onSelect={toggleMenu}  />}
//         </Slide>
//       }

//     </>
//   )
// }

