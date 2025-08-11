'use client'

import { buildSlugPath } from "@/lib/utils/url";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Icon from "../common/Icon";
import { EmptyMenuItemValue, MenuItem } from "@/models/menu";
import { mainMenus } from "@/data/menu/mainMenu";

type Props = {
  handle: string,
  className?: string
};

export default function Sidebar({ 
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
    <div
      className={`flex flex-col bg-sidebar-bg text-list-header-text w-82 h-full border-r border-sidebar-border p-2 ${className}`}
    >
      <div className="p-2 text-list-text font-[mono-space-neon-extralight]">
        EXPLORER
      </div>
      {menus?.map((menu) => {
        const isOpen = openMenus[menu.title] ?? false;

        return (
          <div key={menu.id} className="flex flex-col">
            <div
              className="flex items-center font-[mono-space-neon] cursor-pointer pt-3 pb-2 gap-2"
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
