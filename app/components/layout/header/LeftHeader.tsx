'use client';

import { mainMenus } from '@/data/menu/mainMenu';
import { topMenus } from '@/data/menu/topMenus';
import TopMenuItem from '@/app/components/layout/header/TopMenuItem';
import TopMenuSubItem from '@/app/components/layout/header/TopMenuSubItem'; // 여기서 import
import Link from 'next/link';
import { VscVscode } from 'react-icons/vsc';
import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection';

export default function LeftHeader() {
  const { isMobile } = useDeviceDetection();
  const menus = isMobile ? mainMenus : topMenus;

  return (
    <div className="flex h-full items-center">
      <Link href="/">
        <VscVscode className="w-9 h-9 text-blue-500 ml-3 mr-1" />
      </Link>
      // TODO: 여기서부터 구현. 모바일 버전에서는 드롭다운 메뉴
      {menus.menus.map((menu) =>
        isMobile && menu? (
          <TopMenuSubItem key={menu.name} item={menu} />
        ) : (
          <TopMenuItem key={menu.name} title={menu.name} />
        )
      )}
    </div>
  );
}
