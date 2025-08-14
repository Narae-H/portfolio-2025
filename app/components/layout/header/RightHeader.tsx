'use client'

import WindowButton from "@/app/components/layout/header/WindowButton";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { VscChromeClose, VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";

export default function RightHeader(){
  const { isMobile } = useDeviceDetection();

  return (
    isMobile? (
      <div className="flex h-full mr-3 items-center">
        <Link href="mailto:naraehyeon@gmail.com" className="hover:text-header-hover-text"><AiOutlineMail className="w-6 h-6"/></Link>
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