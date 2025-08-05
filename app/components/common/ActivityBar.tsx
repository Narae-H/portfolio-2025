type Props = {
  className?: string;
}

export default function ActivityBar({className}: Props) {
  return (
    <div className={`flex flex-col justify-between bg-activitybar-bg text-activitybar-text border-r-1 border-activitybar-border ${className}`}>
      <div className="flex"> 
        Top Menus
      </div>
      <div className="flex">
        Bottom Menus
      </div>
    </div>
  )
}