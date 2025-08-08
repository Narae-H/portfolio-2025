import ActivityMenuItem from "@/app/components/layout/activitybar/ActivityMenuItem";
import { Tooltip } from "react-tooltip";

type Props = {
  className?: string;
}

export default function Activitybar({className}: Props) {
  // const { MainMenu } = mainMenus;
  
  return (
    <div className={`flex flex-col justify-between bg-activitybar-bg text-activitybar-text border-r-1 border-activitybar-border ${className}`}>
      <div className="flex w-full flex-col"> 
        <ActivityMenuItem title="Home" tooltip="Home" icon="VscFiles" iconClassName="w-8 h-8"/>
        <ActivityMenuItem title="Home" tooltip="Home" icon="VscFiles" iconClassName="w-8 h-8" isActiveMenu={true}/>
      </div>
      <div className="flex w-full">
        Bottom Menus
      </div>
    </div>
  )
}