const BlockQuote = ({ children, ...rest }) => {

  return(
    <blockquote className='flex flex-row items-center bg-gray-200 
                         text-gray-800 p-2 border-l-8 border-pink-400
                           overflow-y-auto' 
          {...rest}>
      {children}
    </blockquote>
  )
}

export default BlockQuote