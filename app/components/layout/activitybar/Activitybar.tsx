import ActivityMenuItem from "@/app/components/layout/activitybar/ActivityMenuItem";
import { mainMenus } from "@/data/menu/mainMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMail } from "react-icons/ai";

type Props = {
  className?: string;
}

export default function Activitybar({className}: Props) {
  const pathname = usePathname();
  console.log(pathname);

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