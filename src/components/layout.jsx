// import matter from 'gray-matter'
import SideBar from './side-bar'
import Header from './header'
import Copyright from './copyright'
import useToggle from '../hooks/useToggle'
import useDarkMode from '../hooks/useDarkMode'
import { useEffect } from 'react'
import { useRef } from 'react'

const Layout = 
  ({ className, data, header_prefix, github_link }) => {

  let { slug, content, document, frontMatter } = data
  let { name, groups } = document
  const { title, description } = frontMatter
  const [menu, toggleMenu] = useToggle(false)
  const { darkMode } = useDarkMode()

  const main_ref = useRef()
  useEffect(
    () => {
      main_ref.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, [slug]
  )

  return (
  <div className={`${className} ${darkMode ? 'dark' : ''}`}>
    <div className={`relative w-full h-screen flex flex-col 
                     font-open_sans overflow-clip
                     transition-colors
                     bg-transparent dark:bg-gray-900`}>
      <Header className='shadow-sm  --bg-gray-400 flex-shrink-0 
                         w-full h-[70px] ' 
              slug={slug} prefix={header_prefix}
              onMenuClick={toggleMenu} 
              github_link={github_link} />

      <main className='flex flex-row justify-center w-full overflow-auto flex-1 '>
        <SideBar className='hidden md:block w-52 h-full overflow-y-auto 
                            pt-1 flex-shrink-0 px-3'
                  selectedSlug={slug}
                  groups={groups} name={name} />

        <div className='overflow-auto w-full max-w-[800px] h-full --bg-green-400'
            ref={main_ref}>
          <div className='w-full block px-2 md:px-5 h-fit pb-20 mdx --bg-green-400
                          bg-transparent dark:bg-gray-900
                          text-gray-900 dark:text-gray-200'
               
               children={content} />
          <Copyright />               
        </div>
      </main>
      { 
        <SideBar className={`absolute left-0 top-[70px] block md:hidden w-full 
                             h-[calc(100vh-70px)] overflow-y-auto 
                             bg-white dark:bg-gray-900
                             pt-1 px-3 transition-transform duration-300
                             ${menu ? 'translate-x-0' : 'translate-x-full'}`}
                 onClickMenuItem={toggleMenu}
                 selectedSlug={slug}
                 groups={groups} 
                 name={name} />

      }
    </div>
  </div>
  )
}

export default Layout
