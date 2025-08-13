'use client'

import useTabInitializer from "@/lib/hooks/useTabInitializer";
import { ExperiencesTabs, HomeTabs, SkillsTabs } from "./tabsConfig";

type MainContentProps = {
  handle: string;
  subHandle?: string;
  defaultTabId?: string;
  className?: string;
};

function ContentWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex-1 min-w-0 h-auto bg-tabs-tab-bg text-tabs-tab-text ${className}`}>{children}</div>;
}

export default function MainContent({ 
  handle,
  subHandle='',
  className = '' 
}: MainContentProps) {

  useTabInitializer(handle, subHandle);
  
  switch (handle) {
    case "home":
      return <ContentWrapper className={className}><HomeTabs /></ContentWrapper>;
    case "skills":
      return <ContentWrapper className={className}><SkillsTabs /></ContentWrapper>;
    case "experiences":
      return <ContentWrapper className={className}><ExperiencesTabs /></ContentWrapper>;
    default:
      return null;
  }
}


