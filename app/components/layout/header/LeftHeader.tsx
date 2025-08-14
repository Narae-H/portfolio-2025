'use client';

import { mainMenus } from '@/data/menu/mainMenu';
import { topMenus } from '@/data/menu/topMenus';
import TopMenuDesktopItem from '@/app/components/layout/header/TopMenuDesktopItem';
import TopMenuMobileItem from '@/app/components/layout/header/TopMenuMobileItem';
import Link from 'next/link';
import { VscVscode } from 'react-icons/vsc';
import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection';

export default function LeftHeader() {
  const { isMobile } = useDeviceDetection();
  const menus = isMobile ? mainMenus : topMenus;
  const MenuItemComponent = isMobile ? TopMenuMobileItem : TopMenuDesktopItem;

  return (
    <div className="flex h-full items-center">
      <Link href="/">
        <VscVscode className="w-9 h-9 text-blue-500 ml-3 mr-1" />
      </Link>
      {menus.menus.map((menu) => (
        <MenuItemComponent
          key={menu.id}
          item={menu}
        />
      ))}
    </div>
  );
}

