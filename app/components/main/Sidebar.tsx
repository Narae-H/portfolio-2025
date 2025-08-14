'use client'

import Link from "next/link";
import { useState } from "react";

import { mainMenus } from "@/data/menu/mainMenu";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import { EmptyMenuItemValue, MenuItem } from "@/models/menu";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Icon from "@/app/components/common/Icon";

type Props = {
  handle: string,
  className?: string
};

export default function SidebarWrapper(props: Props) {
  const { isMobile } = useDeviceDetection();
  return isMobile ? null : <SidebarContent {...props} />;
}

export function SidebarContent({ 
  handle,
  className = '' 
}: Props) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const selectedMenu = mainMenus.menus.find(
    (menu) => menu.title.toLowerCase() === handle.toLowerCase()
  );
  const menus: MenuItem[] = selectedMenu?.items ?? [EmptyMenuItemValue];

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <div className={`
      flex flex-col 
      h-auto md:w-70 lg:w-82
      p-2 
      bg-sidebar-bg text-list-header-text
      border-r border-sidebar-border 
      ${className}
      `}
    >
      <div className="p-2 text-list-text font-[mono-space-neon-extralight]">
        EXPLORER
      </div>
      {menus?.map((menu) => {
        const isOpen = openMenus[menu.title] ?? false;

        return (
          <div key={menu.id} className="flex flex-col">
            <div
              className="flex items-center pt-3 pb-2 gap-2 font-[mono-space-neon] cursor-pointer"
              onClick={() => toggleMenu(menu.title)}
            >
              {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              <span>{menu.title}</span>
            </div>

            {isOpen && (
              <div className="flex flex-col w-full px-4">
                {menu.items?.map((subMenu: MenuItem) => (
                  subMenu.link && (
                    <Link
                      key={subMenu.id} 
                      href={subMenu.link}
                      className="p-2 hover:bg-list-hover-bg"
                    >
                      <div key={subMenu.title} className="flex items-center gap-2 cursor-pointer">
                        {subMenu.iconKey && <Icon name={subMenu.iconKey} {...subMenu.style} />}
                        <span className="block w-full overflow-hidden text-ellipsis whitespace-nowrap">{subMenu.title}</span>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
