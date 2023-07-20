

export const Image = ({ label, src, imgClass, ...rest }) => {

  return (
<div {...rest}>
  <div className='w-full h-full flex flex-col rounded-lg bg-white overflow-clip border-2 border-black'
    >
    {
      label &&
      <div children={`${label}`}
          className='w-full h-fit bg-slate-100  text-gray-500 text-base p-2 font-semibold' />
    }  
      
    <img src={src} className={imgClass}/>
  </div>
</div>
  )
}
