'use client'

import Link from "next/link";

import { mainMenus } from "@/data/menu/mainMenu";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import { EmptyMenuItemValue, MenuItem } from "@/models/menu";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import Icon from "@/app/components/common/Icon";
import useSelectedTab from "@/lib/hooks/useSelectedTab";
import useSidebar from "@/lib/hooks/useSidebar";
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
  const { collapsed, toggleSidebar } = useSidebar();
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
    <div
      data-tour="sidebar"
      className={`
      relative flex flex-col shrink-0
      h-full min-h-0
      bg-sidebar-bg text-list-header-text
      border-r border-sidebar-border
      overflow-hidden
      transition-[width] duration-300 ease-in-out
      ${collapsed ? "w-9" : "md:w-70 lg:w-82"}
      ${className}
      `}
    >
      {/* Full content keeps its expanded width so it clips (not squishes); fades out on collapse */}
      <div className={`
        flex flex-col h-full min-h-0 md:w-70 lg:w-82 shrink-0
        transition-opacity duration-200 ease-in-out
        ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}>
        <div className="flex items-center justify-between pr-1 shrink-0">
          <div className="p-3 text-list-text font-[mono-space-neon-extralight]">
            EXPLORER
          </div>
          <button
            type="button"
            aria-label="Collapse sidebar"
            onClick={toggleSidebar}
            className="flex items-center justify-center p-2 rounded cursor-pointer text-list-header-text hover:bg-list-hover-bg outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sidebar-border-active"
          >
            <TbLayoutSidebarLeftCollapse className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
          {menus?.map((menu) => {
            const isOpen = openMenus[menu.id] ?? (subCategory === menu.id);

            return (
              <div key={menu.id} className="flex flex-col py-1">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleMenu(menu.id)}
                  className={`
                    flex items-center
                    w-full text-left
                    px-2 p-2
                    gap-2 font-[mono-space-neon] cursor-pointer
                    outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sidebar-border-active
                    `}
                >
                  {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  <span>{menu.title}</span>
                </button>

                {isOpen && (
                  <div className={`
                    flex flex-col w-full
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                  `}>
                    {menu.items?.map((subMenu: MenuItem) => (
                      subMenu.link && (
                        <Link
                          key={subMenu.id}
                          href={subMenu.link}
                          className={`px-6 py-3 hover:bg-list-hover-bg ${(selectedTab === subMenu.id)? 'bg-sidebar-active-bg' : ''}`}
                        >
                          <div className="flex items-center gap-2 cursor-pointer">
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
      </div>

      {/* Collapsed strip: solid overlay with the expand button; fades in as the content fades out */}
      <div className={`
        absolute inset-y-0 left-0 w-9 z-10
        flex flex-col items-center bg-sidebar-bg
        transition-opacity duration-200 ease-in-out
        ${collapsed ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}>
        <button
          type="button"
          aria-label="Expand sidebar"
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 mt-1 rounded cursor-pointer text-list-header-text hover:bg-list-hover-bg outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sidebar-border-active"
        >
          <TbLayoutSidebarLeftExpand className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
