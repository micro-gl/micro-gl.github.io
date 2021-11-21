import Link from 'next/link'
import { useColorMode, useColorModeValue, useBreakpointValue, Stack, Box, Center } from '@chakra-ui/react'
import Header from '../src/components/header'
import Copyright from '../src/components/copyright'

const Item = ( props ) => {
  let { item, groupFontSize, itemFontSize, ...rest } = props
  const { title, route, desc } = item
  groupFontSize = groupFontSize ?? "sm"
  itemFontSize = itemFontSize ?? "md"
  const selectedBgColor = useColorModeValue("pink.500", "purple.800")
  const selectedBgColor2 = useColorModeValue("purple.500", "purple.500")
  const title_fontsize = useBreakpointValue({ base: 'xl', sm: 'xx-large'})

  return (
    <Link key={route} href={`${item.route}`} as={`${route}`} passHref>
      <Box {...rest} as="a" >
        <Box color={selectedBgColor2} 
            fontFamily="PressStart2P-Regular"
                fontSize={title_fontsize} fontWeight="bold" 
              opacity={0.95}>
          {title}
        </Box>
        <Box 
            color='white'
            fontSize="lg"
            fontWeight="medium" w="100%" my={1} px={4} py={4}
            bg={selectedBgColor}
            opacity={1.0}
            borderRadius="xl">
          {desc}
        </Box>
      </Box>
    </Link>
  )
}

const Page = ( props ) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const {...rest} = props

  const items = [{title: 'micro{gl}', 
                  route: 'docs/microgl', 
                  desc:"Fast, Super Slim, Embeddable, Headers files only C++11 graphics library, that \
                        can run on any 32/64 bits computer without FPU or GPU. No standard library required."}, 
                 {title: 'micro{tess}', 
                  route: 'docs/micro-tess', 
                  desc: "Fast, Slim, Embeddable, Allocator-aware, Headers files only C++11 geometry tesselation\
                      library for vector graphics, that can run on any 32/64 bits computer with or without FPU.\
                  No standard library required."}]
  const [groupFontSize, itemFontSize]= ["1.2rem", "1.0rem"]

  return (
    <Box w='100%' h='100vh'>
      <Header boxShadow="md" w="100%" slug={'/root/'} prefix={'micro-tools'}
          github_link='https://github.com/micro-gl/'
          h='70px' widthAll={'100vw'} widthSide={0} 
          plSide={0} />

      <Box h='calc(100% - 70px - 56px)' w='100%' overflowY="auto" >
        <Stack {...rest} w='75%' h='100vh' pt={12} as="nav" direction='column' 
                        marginLeft='auto' marginRight='auto'>
          { 
            items.map((item, index) => (
              <Item pt={2} w='100%' key={index} 
                        item={item} mb='2.25vw'
                        groupFontSize={groupFontSize}
                        itemFontSize={itemFontSize}/>))
          }
        </Stack>
      </Box>
      <Copyright w='100%' pt={4} pb={4} position='absolute' bottom='0'/>
    </Box>
  )
}

export default Page