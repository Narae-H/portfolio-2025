import ActivityMenuItem from "@/app/components/layout/activitybar/ActivityMenuItem";
import { mainMenus } from "@/data/menu/mainMenu";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
}

export default function Activitybar({className}: Props) {
  // TODO: 나중에 path 따라서 active 메뉴 선택되나 확인 필요
  const pathname = usePathname();

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
          const isActive = pathname.startsWith(menu.name);
          return (
            <ActivityMenuItem 
              key={menu.name}  
              tooltip={menu.tooltip} 
              link={`/${menu.name}`}
              icon={menu.icon} 
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