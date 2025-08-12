'use client'

import { Tab } from "@/app/components/main/TabsPanel";
import { ExperiencesTabs, HomeTabs, SkillsTabs } from "./tabsConfig";

type MainContentProps = {
  handle: string;
  selectedTab?: string;
  defaultTabId?: string;
  className?: string;
};

function ContentWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-1 w-full h-auto bg-tabs-tab-bg text-tabs-tab-text ${className}`}>{children}</div>;
}

export default function MainContent({ 
  handle,
  selectedTab='',
  className = '' 
}: MainContentProps) {
  
  switch (handle) {
    case "home":
      return <ContentWrapper className={className}><HomeTabs selectedTab={selectedTab} /></ContentWrapper>;
    case "skills":
      return <ContentWrapper className={className}><SkillsTabs selectedTab={selectedTab} /></ContentWrapper>;
    case "experiences":
      return <ContentWrapper className={className}><ExperiencesTabs selectedTab={selectedTab} /></ContentWrapper>;
    default:
      return null;
  }
}


