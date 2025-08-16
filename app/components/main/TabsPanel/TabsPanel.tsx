'use client'

import { ReactNode } from "react";

import { MenuItem } from "@/models/menu";
import TabsContent from "./TabsContent";
import TabsHeader from "./TabsHeader";

export interface Tab extends MenuItem {
  content?: ReactNode
}

export interface TabsProps {
  tabs: Tab[];
  selectedTab?: string;
  className?: string;
  onCloseTab?: (id: string) => void;
  onSelectTab?: (category:string, id: string) => void;
}

export default function TabsPanel({ 
  tabs, 
  selectedTab,
  className = '',
  onCloseTab,
  onSelectTab 
}: TabsProps) {
  return (
    <div className={`
      flex flex-1 flex-col basis-0
      min-w-0 h-min-0 h-full
      bg-tabs-panel-bg
      text-tabs-tab-text 
      ${className}
    `}>
      <TabsHeader 
        tabs={tabs}
        selectedTab={selectedTab}
        onCloseTab={onCloseTab}
        onSelectTab={onSelectTab}
        />

      <TabsContent
        tabs={tabs}
        selectedTab={selectedTab}
      />
    </div>
  );
}
