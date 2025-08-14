'use client'

import ActivityMenuItem from "@/app/components/layout/activitybar/ActivityMenuItem";
import { mainMenus } from "@/data/menu/mainMenu";
import { buildSlugPath } from "@/lib/utils/url";
import { useParams } from "next/navigation";

type Props = {
  className?: string;
}

export default function Activitybar({className}: Props) {
  const { category } = useParams();

  return (
    <div className={`
      flex flex-col justify-between 
      bg-activitybar-bg 
      text-activitybar-text 
      border-r-1 border-activitybar-border 
      ${className}`}
    >
      <div className="flex w-full flex-col">
        { mainMenus.menus.map( (menu) => {
          const isActive = (category === menu.id || (!(category) && (menu.id ==="home")));
          return (
            <ActivityMenuItem 
              key={menu.id}  
              tooltip={menu.tooltip?? ''} 
              link={(menu.title === 'Home')? '/': `/${buildSlugPath([menu.title])}`}
              icon={menu.iconKey} 
              iconClassName="w-8 h-8"
              isActiveMenu={isActive} 
            />
          )
        }
        )} 
      </div>
      <div className="flex w-full flex-col">
        <ActivityMenuItem 
          tooltip="Contact Me!" 
          link="mailto:naraehyeon@gmail.com"
          icon="AiOutlineMail"
          iconClassName="w-8 h-8"
        />
      </div>
    </div>
  )
}