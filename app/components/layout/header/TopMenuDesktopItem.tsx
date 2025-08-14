import { MenuItem } from "@/models/menu"

type TopMenuItemProps = {
  item: MenuItem,
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
      {item.title}
    </div>
  )
}