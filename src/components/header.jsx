import { AiFillGithub, 
  AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'
import useDarkMode from '../hooks/useDarkMode'

const Header = 
  ({ className, logo, slug, prefix, github_link, onMenuClick, ...rest}) => {

  const { darkMode, toggle } = useDarkMode()

  return (

    <header className={`flex flex-row justify-between items-center 
                        w-full max-w-[1100px] mx-auto px-3 ${className}`}>


      <div className='h-fit w-fit flex flex-row items-center 
                      font-old text-base font-bold'>
        <div className='h-20 hidden sm:block opa'>
          <img src={logo} className='h-full object-contain rounded-md border dark:border-pink-400/50'/>   
        </div>                        
        <span children={prefix} className='text-black dark:text-white' />
        <span children={`::${slug}`} 
              className='hidden md:inline text-kf-500 whitespace-nowrap' />
      </div>

      <div className='h-fit w-fit flex flex-row items-center gap-3
                      text-2xl'>

        <button className='p-0' onClick={toggle}>
          <HiOutlineLightBulb className='text-black dark:text-white' />
        </button>

        <a href={github_link} target='_blank' >
          <AiFillGithub className='text-black dark:text-white' />
        </a>

        {
          onMenuClick &&
          <AiOutlineMenu className='inline md:hidden cursor-pointer 
                                  text-black dark:text-white'
                          onClick={onMenuClick} />
        }
      </div>

    </header>
  )
}

export default Header
