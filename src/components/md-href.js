import Link from 'next/link'
// import { Link } from '@chakra-ui/react'

export default function CustomLink({ href, children, ...rest }) {
  console.log('children ', href)
  return (
    <Link passHref href={href} 
          className='text-kf-500'
          children={children} 
          {...rest} />
  )
}
