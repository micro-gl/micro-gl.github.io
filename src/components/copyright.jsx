
export default function Copyright( props ) {
  return (
      <p className='w-full my-10 text-base text-center' {...props} >
        {`All Rights Reserved, Tomer Shalev, (2022-${new Date().getFullYear()})`}
      </p>
  )
}

