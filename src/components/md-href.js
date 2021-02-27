import { Link as NextLink } from 'next/link'
import { Link } from '@chakra-ui/react'

export default function CustomLink({ as, href, children, ...otherProps }) {
  const props = {as, href, children, ...otherProps}
  console.log(props)
  return (
    <>
      <Link {...otherProps} as={NextLink} href={href} color="purple.500" >
        {children}
      </Link>
      {/* <style jsx>{`
        a {
          color: tomato;
        }
      `}</style> */}
    </>
  )
}



// export default function CustomLink({ as, href, ...otherProps }) {
//   return (
//     <>
//       <Link as={NextLink} href={href} colorScheme="purple">
//         {/* <Link {...otherProps} /> */}
//       </Link>
//       <style jsx>{`
//         a {
//           background: yellow;
//           color: tomato;
//         }
//       `}</style>
//     </>
//   )
// }

