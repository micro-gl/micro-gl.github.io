import Link from 'next/link'
import Header from '../../src/components/header'
import Copyright from '../../src/components/copyright'
import useDarkMode from '../../src/hooks/useDarkMode'

const items = [
  {
    title: 'micro{gl}', 
    route: 'docs/microgl', 
    desc:"Fast, Super Slim, Embeddable, Headers files only C++11 graphics library, that \
          can run on any 32/64 bits computer without FPU or GPU. No standard library required."
  }, 
  {
    title: 'micro{tess}', 
    route: 'docs/micro-tess', 
    desc: "Fast, Slim, Embeddable, Allocator-aware, Headers files only C++11 geometry tesselation\
           library for vector graphics, that can run on any 32/64 bits computer with or without FPU.\
           No standard library required."
  }
]

const Item = ({ item, ...rest }) => {
  const { title, route, desc } = item

  return (
    <Link href={`${item.route}`}>
      <div className='w-72 p-4'>
        <p children={title} 
           className='font-old2 font-bold text-5xl text-kf-500' />
        <p children={desc} 
           className='font-open_sans font-medium text-lg text-white
                      rounded-xl w-full bg-pink-500 dark:bg-kf-500 p-4' />
      </div>
    </Link>
  )
}

const Page = ( props ) => {
  const { darkMode, toggle } = useDarkMode()

  return (
  <div className={`w-full h-screen ${darkMode ? 'dark' : ''}`}>
    <div className={`w-full h-full bg-transparent 
                   dark:bg-gray-800 transition-colors`}>
      <Header className='shadow-sm flex-shrink-0 
                         w-full h-[70px] ' 
              slug='/root/' prefix='micro-tools'
              github_link='https://github.com/micro-gl/'  />

      <div className='flex flex-row flex-wrap justify-center mx-auto w-3/4'>
        { 
          items.map(
            (item, index) => 
              <Item key={index} 
                    item={item} mb='2.25vw'/>
          )
        }
      </div>
      <Copyright />
    </div>
  </div>
  )
}

export default Page