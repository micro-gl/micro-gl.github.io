import { BsExclamation } from "react-icons/bs"
import { Flex, Spacer, Box, Icon } from '@chakra-ui/react'

const BlockQuote = ({children, ...rest}) => {

  return(
    <Box as="blockquote" d="flex" alignItems="center" color="gray.800"
          bgColor="gray.200" p="2" pl="0" 
          borderRadius="md" {...rest}>
        <Icon w={6} color="purple.600"
           h="100%" 
          as={BsExclamation} />

      {children}
    </Box>
  )
}

export default BlockQuote