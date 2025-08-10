'use client'

import React, { useState, ReactNode } from "react";
import { VscChromeClose } from "react-icons/vsc";

export interface Tab {
  id: string;
  title: string;
  Icon: ReactNode;
  link: string;
  content: ReactNode; 
}

export interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
  className?: string;
  onCloseTab?: (id: string) => void;
}

export default function TabsPanel({ 
  tabs, 
  defaultTabId, 
  className = '',
  onCloseTab 
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTabId ?? tabs[0].id);

  return (
    <div className={`
      flex flex-col 
      w-full h-full 
      bg-tabs-panel-bg
      text-tabs-tab-text 
      ${className}
    `}>
      <div className="flex h-[39px]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`
                flex items-center 
                px-4 py-2 
                cursor-pointer 
                select-none
                border-1
                border-l-transparent
                border-r-tabs-tab-border
                hover:bg-tabs-tab-hover-bg
                ${isActive ? "h-[40px] relative bg-tabs-tab-active-bg border-t-1 border-t-tabs-tab-active-border border-b-tabs-tab-active-bg" : "border-t-1 border-transparent"}
                `}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center gap-2">
                {tab.Icon}
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
            </div>
          );
        })}
      </div>

      <div className="flex flex-1 border-t-1 border-t-tabs-content-border bg-tabs-content-bg ">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
