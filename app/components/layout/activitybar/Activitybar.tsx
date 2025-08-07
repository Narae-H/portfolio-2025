import { mainMenus } from "@/data/menu/mainMenu";
import ActivityMenuItem from "./ActivityMenuItem";

type Props = {
  className?: string;
}

export default function Activitybar({className}: Props) {
  // const { MainMenu } = mainMenus;
  
  return (
    <div className={`flex flex-col justify-between bg-activitybar-bg text-activitybar-text border-r-1 border-activitybar-border ${className}`}>
      <div className="flex"> 
        <ActivityMenuItem title="test" toottip="test"/>
      </div>
      <div className="flex">
        Bottom Menus
      </div>
    </div>
  )
}