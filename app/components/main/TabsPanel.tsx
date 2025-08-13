'use client'

import Icon from "@/app/components/common/Icon";
import { MenuItem } from "@/models/menu";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

export interface Tab extends MenuItem {
  content?: ReactNode
}

export interface TabsProps {
  tabs: Tab[];
  selectedTab?: string;
  className?: string;
  onCloseTab?: (id: string) => void;
  onSelectTab?: (id: string) => void;
}

export default function TabsPanel({ 
  tabs, 
  selectedTab,
  className = '',
  onCloseTab,
  onSelectTab 
}: TabsProps) {
  // const [activeTab, setActiveTab] = useState<string>( !selectedTab? tabs[0].id:selectedTab );

  // useEffect(() => {
  //   setActiveTab(!selectedTab ? tabs[0].id : selectedTab);
  // }, [selectedTab, tabs]);

  const handleTabClick = (tabId: string) => {
    onSelectTab?.(tabId);
  };

  return (
    <div className={`
      flex flex-col
      min-w-0 h-full
      bg-tabs-panel-bg
      text-tabs-tab-text 
      ${className}
    `}>
      <div className="flex flex-row">
        <div className="
          flex
          h-[39px] 
          whitespace-nowrap 
          tabs-scroll
          overflow-x-hidden overflow-y-hidden
          hover:overflow-x-auto
        ">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab.id;
            return (
              <div
                key={tab.id}
                className={`
                  inline-flex
                  h-[39px] 
                  px-1
                  items-center 
                  select-none
                  border-1 border-l-transparent border-r-tabs-tab-border border-b-tabs-tab-border border-t-transparent hover:bg-tabs-tab-hover-bg 
                  ${isActive ? " bg-tabs-tab-active-bg !border-t-tabs-tab-active-border !border-b-tabs-tab-active-bg" : "border-t-1 border-transparent"}
                  `}
                onClick={() => handleTabClick(tab.id)}
              >
                <Link href={tab.link?? ''} className="flex items-center gap-2 px-4 h-full cursor-pointer ">
                  {tab.iconKey && <Icon name={tab.iconKey} {...tab.style}/>}
                  <div>{tab.title}</div>
                </Link>
                

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onCloseTab?.(tab.id);
                  }}
                  className="p-2 text-gray-400 focus:outline-none cursor-pointer rounded-md hover:bg-tabs-tab-hover-text"
                >
                  <VscChromeClose />
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex-1 border-b-1 border-b-tabs-content-border">
        </div>
      </div>

      <div className="
        flex flex-1 
        bg-tabs-content-bg
      ">
        {tabs.find((tab) => tab.id === selectedTab)?.content}
      </div>
    </div>
  );
}
