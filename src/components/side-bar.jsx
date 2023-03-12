import Link from 'next/link'

const SideGroup = 
  ({ onClickMenuItem, selectedSlug, group, ...rest }) => {

  const {title, items} = group

  return (
    <div {...rest}>
      <div 
        className='text-2xl font-old2 opacity-95 font-normal 
                 text-kf-500 dark:text-pink-500 w-full '
        children={title} />
      <div className='flex flex-col w-full gap-0 mt-3'>
        { 
          items.map(
            (item, index) => 
              <Link key={index} href={`${item.route}`} >
                <p onClick={e => { onClickMenuItem && onClickMenuItem(item)}} 
                   className={`text-sm  font-medium px-2 
                               py-3 rounded-md
                              ${item.route===selectedSlug ? 
                                `bg-kf-50 dark:bg-kf-500 text-gray-900 
                                 dark:text-gray-100` : 
                                'bg-transparent text-gray-900 dark:text-gray-300'
                              }`}
                   children={item.title} />
              </Link>
          )
        }
      </div>

    </div>
  )
}

const SideBar = 
  ({ className, onClickMenuItem, selectedSlug, groups, 
     name, ...rest }) => {

  return (
    <nav {...rest} className={className} >
      <div className='flex flex-col w-full h-full gap-6'>
        { 
          groups.map(
            (group, index) => 
              <SideGroup className='' key={index} 
                        group={group} 
                        selectedSlug={selectedSlug}
                        onClickMenuItem={onClickMenuItem} />  
          )
        }
      </div>
    </nav>
  )
}

export default SideBar