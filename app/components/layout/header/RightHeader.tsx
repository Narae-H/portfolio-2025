'use client'

import { VscChromeClose, VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";
import WindowButton from "@/app/components/layout/header/WindowButton";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function RightMenus(){
  const { isMobile } = useDeviceDetection();

  return (
    isMobile? (
      <div className="flex h-full mr-3 items-center">
        <Link href="emailto:naraehyeon@gmail.com"><AiOutlineMail className="w-6 h-6"/></Link>
      </div>
    ) : (
      <div className='flex h-full'>
        <WindowButton Icon={VscChromeMinimize}/>
        <WindowButton Icon={VscChromeRestore}/>
        <WindowButton Icon={VscChromeClose} isClose={true}/>
      </div>
    )
  )
}