import { VscChromeClose, VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";
import WindowButton from "@/app/components/common/WindowButton";

export default function RightMenus(){
  return (
    <div className='flex h-full'>
      <WindowButton Icon={VscChromeMinimize}/>
      <WindowButton Icon={VscChromeRestore}/>
      <WindowButton Icon={VscChromeClose} isClose={true}/>
    </div>
  )
}