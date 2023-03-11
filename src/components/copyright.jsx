import { Center } from '@chakra-ui/react'

export default function Copyright( props ) {
  return (
      <Center w='100%' pt={10} pb={10} fontSize="md" {...props} >
        {`All Rights Reserved, Tomer Shalev, (2020-${new Date().getFullYear()})`}
      </Center>
  )
}

