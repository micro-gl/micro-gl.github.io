import Link from 'next/link'
import { useColorMode, useColorModeValue, Stack, Box } from '@chakra-ui/react'

const SideGroup = ( props ) => {
  let { selectedSlug, group, groupFontSize, itemFontSize, ...rest } = props
  const {title, items} = group
  groupFontSize = groupFontSize ?? "sm"
  itemFontSize = itemFontSize ?? "md"
  const selectedBgColor = useColorModeValue("purple.50", "purple.800")
  const selectedBgColor2 = useColorModeValue("purple.500", "purple.500")
  // console.log(items)
  return (
    <Box {...rest}>
      <Box fontSize={groupFontSize} color={selectedBgColor2} 
           fontFamily="Pixeboy" fontWeight="normal" 
           w="100%" opacity={0.95}>
        {title}
      </Box>
      <Stack direction="column" w="100%">
        { 
          items.map((item, index) => {
            const isSelected = item.route===selectedSlug
            return (
            <Link key={index} w="100%" href={`${item.route}`} as={`${item.route}`} passHref>
              <Box as="a" 
                   fontSize={itemFontSize} 
                   fontWeight="medium" w="100%" my={1} px={2} py={1}
                   bg={isSelected ? selectedBgColor : "transparent"}
                   opacity={1.0}
                   borderRadius="md"
                   >
                {item.title}
              </Box>
            </Link>

          )})
        }
      </Stack>

    </Box>
  )
}

const SideBar = ( props ) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { selectedSlug, groups, name, groupFontSize, 
                                    itemFontSize, ...rest } = props

  return (
    <Stack {...rest} as="nav" direction='column' overflowY="auto" pb="100px">
        { 
          groups.map((group, index) => (
            <SideGroup pt={2} w="100%" key={index} 
                      group={group}
                      groupFontSize={groupFontSize}
                      itemFontSize={itemFontSize} 
                      selectedSlug={selectedSlug} />  
          ))
        }
    </Stack>
  )
}

export default SideBar