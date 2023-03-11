import { AiFillGithub, AiFillHome, 
  AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'

const Header = ({className, slug, prefix, widthAll, widthSide, plSide, 
  github_link, onMenuClick, ...rest}) => {
  // const { colorMode, toggleColorMode } = useColorMode()

  // const medium_screen = useBreakpointValue({ base: true, md: false})
  // const small_screen = useBreakpointValue({ base: true, sm: false})
  return (

    <header className={`flex flex-row justify-between items-center 
                        w-full max-w-[1100px] mx-auto px-3 ${className}`}>

      <div className='h-fit w-fit flex flex-row items-center 
                      font-old text-base font-bold'>
        <span children={prefix} />
        <span children={`::${slug}`} 
              className='hidden md:inline text-kf-500 whitespace-nowrap' />
      </div>

      <div className='h-fit w-fit flex flex-row items-center gap-3
                      text-2xl'>

        <button className='p-0' onClick={undefined}>
          <HiOutlineLightBulb className='' />
        </button>

        <a href={github_link} target='_blank' >
          <AiFillGithub className='' />
        </a>

        <AiOutlineMenu className='inline md:hidden cursor-pointer' />
      </div>

    </header>
  )
}

export default Header