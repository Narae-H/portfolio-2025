'use client'

import TabsPanel, { Tab } from "@/app/components/main/TabsPanel";
import { experiencesTabs, homeTabs, skillsTabs } from "./tabsConfig";

type MainContentProps = {
  handle: string;
  selectedTab?: string;
  defaultTabId?: string;
  className?: string;
};

export default function MainContent({ 
  handle,
  selectedTab,
  className = '' 
}: MainContentProps) {

  let tabs: Tab[];

  switch (handle) {
    case "home":
      tabs = homeTabs();
      break;
    case "skills":
      tabs = skillsTabs();
      break;
    case "experiences":
      tabs = experiencesTabs();
      break;
    default:
      tabs = [];
  }
  return (
    <div className={`flex flex-1 w-full h-auto bg-tabs-tab-bg text-tabs-tab-text ${className}`}>
      <TabsPanel tabs={tabs} selectedTab={selectedTab} />
    </div>
  );
}

