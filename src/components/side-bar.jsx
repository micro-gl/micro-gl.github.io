import Link from 'next/link'
// import { useColorMode, useColorModeValue, Stack, Box } from '@chakra-ui/react'

const SideGroup = 
  ({ selectedSlug, group, groupFontSize, 
     itemFontSize, onSelect, ...rest }) => {

  const {title, items} = group
  groupFontSize = groupFontSize ?? "sm"
  itemFontSize = itemFontSize ?? "md"
  // const selectedBgColor = useColorModeValue("purple.50", "purple.800")
  // const selectedBgColor2 = useColorModeValue("purple.500", "purple.500")
  // console.log(items)

  return (
    <div {...rest}>
      <div 
        className='text-2xl font-old2 opacity-95 font-normal 
                 text-kf-500 w-full '
        children={title} />
      <div className='flex flex-col w-full gap-0 mt-3'>
        { 
          items.map(
            (item, index) => 
              <Link key={index} href={`${item.route}`} >
                <p onClick={e => { onSelect && onSelect(item)}} 
                   className={`text-sm text-gray-900 font-medium px-2 
                               py-3 rounded-md
                              ${item.route===selectedSlug ? 'bg-kf-50': 'bg-transparent'}`}
                   children={item.title} />
              </Link>
          )
        }
      </div>

    </div>
  )
}

const SideBar = ({ className, selectedSlug, groups, name, groupFontSize, 
                   onSelect, itemFontSize, ...rest }) => {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isDark = colorMode === 'dark'

  return (
    <nav {...rest} className={className} >
      <div className='flex flex-col w-full h-full gap-6 pl-3'>
        { 
          groups.map(
            (group, index) => 
              <SideGroup className='' key={index} 
                        group={group} onSelect={onSelect}
                        groupFontSize={groupFontSize}
                        itemFontSize={itemFontSize} 
                        selectedSlug={selectedSlug} />  
          )
        }
      </div>
    </nav>
  )
}

export default SideBar