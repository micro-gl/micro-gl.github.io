import Link from 'next/link'
import { useColorMode, useColorModeValue, Stack, Box, Center } from '@chakra-ui/react'
import Header from '../src/components/header'

const Item = ( props ) => {
  let { item, groupFontSize, itemFontSize, ...rest } = props
  const { title, route, desc } = item
  groupFontSize = groupFontSize ?? "sm"
  itemFontSize = itemFontSize ?? "md"
  const selectedBgColor = useColorModeValue("purple.50", "purple.800")
  const selectedBgColor2 = useColorModeValue("purple.500", "purple.500")

  return (
    <Link key={route} href={`${item.route}`} as={`${route}`} passHref>
      <Box {...rest} as="a" >
        <Box color={selectedBgColor2} 
            fontFamily="PressStart2P-Regular"
                fontSize="xl" fontWeight="bold" 
              opacity={0.95}>
          {title}
        </Box>
        <Box 
            fontSize="lg"
            fontWeight="medium" w="100%" my={1} px={2} py={1}
            bg={selectedBgColor}
            opacity={1.0}
            borderRadius="md">
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
    <>
    <Header boxShadow="md" w="100%" slug={'root'} prefix={'micro-tools'}
        h='70px' widthAll={'100vw'} widthSide={0} 
        plSide={0} />

    <Center h='100%' overflowY="auto" mt={14} mb={'200px'}>
      <Stack {...rest} h='100vh' as="nav" direction='column'>
        { 
          items.map((item, index) => (
            <Item pt={2} w='calc(50vw)' key={index} 
                      item={item} mb='2.25vw'
                      groupFontSize={groupFontSize}
                      itemFontSize={itemFontSize}/>))
        }
      </Stack>
    </Center>
    </>
  )
}

export default Page