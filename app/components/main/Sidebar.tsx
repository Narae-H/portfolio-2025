'use client'

import Link from "next/link";

import { mainMenus } from "@/data/menu/mainMenu";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import { EmptyMenuItemValue, MenuItem } from "@/models/menu";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Icon from "@/app/components/common/Icon";
import useSelectedTab from "@/lib/hooks/useSelectedTab";
import { useState } from "react";
import { useParams } from "next/navigation";

type Props = {
  category: string,
  className?: string
};

export default function SidebarWrapper(props: Props) {
  const { isMobile } = useDeviceDetection();
  return isMobile ? null : <SidebarContent {...props} />;
}

export function SidebarContent({ 
  category,
  className = '' 
}: Props) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const { selectedTab } = useSelectedTab(`selected_${category}_tab`);
  const { subCategory } = useParams();
  
  const selectedMenu = mainMenus.menus.find(
    (menu) => menu.id === category
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
      bg-sidebar-bg text-list-header-text
      border-r border-sidebar-border 
      ${className}
      `}
    >
      <div className="p-3 text-list-text font-[mono-space-neon-extralight]">
        EXPLORER
      </div>
      {menus?.map((menu) => {
        const isOpen = openMenus[menu.id] ?? (subCategory === menu.id);

        return (
          <div key={menu.id} className="flex flex-col py-1">
            <div
              className={`
                flex items-center 
                px-2 p-2
                gap-2 font-[mono-space-neon] cursor-pointer
                `}
              onClick={() => toggleMenu(menu.id)}
            >
              {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              <span>{menu.title}</span>
            </div>

            {isOpen && (
              <div className={`
                flex flex-col w-full
                overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `}>
                {menu.items?.map((subMenu: MenuItem) => (
                  subMenu.link && (
                    <Link
                      key={subMenu.id} 
                      href={subMenu.link}
                      className={`px-6 py-3 hover:bg-list-hover-bg ${(selectedTab === subMenu.id)? 'bg-sidebar-active-bg' : ''}`}
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
