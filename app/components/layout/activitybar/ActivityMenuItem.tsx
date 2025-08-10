import Icon from "@/app/components/common/Icon";
import Tooltip from "@/app/components/common/Tooltip";
import Link from "next/link";

type ActivityMenuItemProps = {
  tooltip: string,
  link: string
  icon?: string,
  className?: string,
  iconClassName?: string,
  isActiveMenu?: boolean,
  children?: React.ReactNode
}

export default function ActivityMenuItem({
  tooltip = '',
  link = '',
  icon = '',
  className = '',
  iconClassName = '',
  isActiveMenu = false
}: ActivityMenuItemProps) {
  return (
    <Tooltip 
      content={tooltip} 
      side="right" 
      className="flex bg-activitybar-bg text-activitybar-hover-text border-1 border-activitybar-border text-sm" 
      arrowClassName="bg-activitybar-bg border-l-1 border-b-1 border-activitybar-border"
    >
      <Link href={link} 
            className={`
              flex w-full justify-center 
              my-2 
              border-l-3 
              ${isActiveMenu? 'border-sidebar-border-active': 'border-sidebar-border-inactive'}
              `}
            data-tooltip-id='tooltip-right'
            data-tooltip-content={tooltip}
      >
        <div className={`
          flex w-full justify-center
          text-activitybar-text 
          p-3 rounded-md 
          hover:cursor-pointer horder: hover:text-activitybar-hover-text
          ${className}
        `}>
          <Icon name={icon} className={`${iconClassName}`}/>
        </div>
      </Link>
    </Tooltip> 
  )
}