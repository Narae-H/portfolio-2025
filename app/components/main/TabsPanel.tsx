'use client'

import Icon from "@/app/components/common/Icon";
import { MenuItem } from "@/models/menu";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

export interface Tab extends MenuItem {
  content?: ReactNode
}

export interface TabsProps {
  tabs: Tab[];
  selectedTab?: string;
  className?: string;
  onCloseTab?: (id: string) => void;
}

export default function TabsPanel({ 
  tabs, 
  selectedTab,
  className = '',
  onCloseTab 
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>( !selectedTab? tabs[0].id:selectedTab );

  return (
    <div className={`
      flex flex-col
      min-w-0 h-full
      overflow-x-auto overflow-y-hidden
      bg-tabs-panel-bg
      text-tabs-tab-text 
      ${className}
    `}>
      <div className="h-[39px] inline-flex whitespace-nowrap w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.link?? ''}
              className={`
                inline-flex
                items-center 
                h-full
                px-4 py-2 
                cursor-pointer 
                select-none
                border-1 border-l-transparent border-r-tabs-tab-border hover:bg-tabs-tab-hover-bg
                ${isActive ? "h-[40px] relative bg-tabs-tab-active-bg border-t-1 border-t-tabs-tab-active-border border-b-tabs-tab-active-bg" : "border-t-1 border-transparent"}
                `}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center gap-2">
                {tab.iconKey && <Icon name={tab.iconKey} {...tab.style}/>}
                <div>{tab.title}</div>
              </div>
              

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab?.(tab.id);
                }}
                className="ml-3 p-2 text-gray-400 focus:outline-none cursor-pointer rounded-md hover:bg-tabs-tab-hover-text"
              >
                <VscChromeClose />
              </button>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-1 border-t-1 border-t-tabs-content-border bg-tabs-content-bg ">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
