type TopMenuItemProps = {
  title: string
  className?: string
}

export default function TopMenuItem({
  title,
  className = ''
}: TopMenuItemProps) {
  return (
    <div className={`flex text-base-text p-3 rounded-md hover:bg-base-hover-bg hover: cursor-pointer ${className}`}>
      {title}
    </div>
  )
}