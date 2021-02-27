import { useColorMode, Flex, Button, useBreakpointValue, Box, Icon, chakra } from '@chakra-ui/react'
import { AiFillGithub, AiFillHome, AiOutlineMenu } from "react-icons/ai"
import { HiOutlineLightBulb } from "react-icons/hi"

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  let { slug, widthAll, onMenuClick, ...rest } = props
  const medium_screen = useBreakpointValue({ base: true, md: false})
  const small_screen = useBreakpointValue({ base: true, sm: false})

  return (
    <Flex as="header" {...rest}  justifyContent="center">
      <Flex w={widthAll} h="100%" ml={2} justifyContent="space-between">
        <Flex alignItems="center"
              fontFamily="PressStart2P-Regular"
              fontSize="md" fontWeight="bold" 
              h="100%" >
          [micro-GL]
          {!medium_screen && <Box as="span" color="purple.500">::{slug}</Box>}
        </Flex>

        <Flex h="100%" direction="row" alignItems="center">        

          <Button p={0} mx={1}  onClick={toggleColorMode}
                  bg="transparent">
            <Icon w={6} h={6} color="black.500"
                  as={HiOutlineLightBulb} />
          </Button>
          <Button as="a" p={0} mx={1} onClick={(e)=> window.open("http://github.com",'_blank')}
                  bg="transparent">
            <Icon w={6} h={6} color="black.500"
                  as={AiFillGithub} />
          </Button>
          {small_screen &&
            <Button as="a" p={0} mx={1} onClick={onMenuClick}
                    bg="transparent">
              <Icon w={6} h={6} color="black.500"
                    as={AiOutlineMenu} />
            </Button>
          }

        </Flex>      
      </Flex>      
    </Flex>
  )
}

export default Header