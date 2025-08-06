'use client'

import { mainMenus } from '@/data/menu/mainMenu';
import { topMenus } from '@/data/menu/topMenus';
import TopMenuItem from '@/app/components/common/TopMenuItem';
import Link from 'next/link';
import { VscVscode } from 'react-icons/vsc';
import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection';

export default function LeftMenus() {
  const { isMobile } = useDeviceDetection();
  const menus = isMobile? mainMenus:topMenus;

  return (
    <div className="flex h-full items-center">
      <Link href="/"><VscVscode className="w-6 h-6 text-blue-500 m-3"/></Link>
      {
        menus.menus.map( (menu) => 
          <TopMenuItem key={menu.name} title={menu.name}/>
        )
      }
    </div>
  )
}