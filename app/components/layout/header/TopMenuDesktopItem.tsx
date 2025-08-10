import { Menu } from "@/data/menu/topMenus"

type TopMenuItemProps = {
  item: Menu,
  className?: string
}

export default function TopMenuItem({
  item,
  className = ''
}: TopMenuItemProps) {
  return (
    <div className={`
      flex 
      text-header-text 
      p-3 
      rounded-md 
      hover:bg-header-hover-bg 
      hover: cursor-pointer 
      ${className}
    `}>
      {item.name}
    </div>
  )
}