'use client'

import useTabInitializer from "@/lib/hooks/useTabInitializer";
import { ExperiencesTabs, HomeTabs, SkillsTabs } from "./tabsConfig";

type MainContentProps = {
  handle: string;
  subHandle?: string;
  defaultTabId?: string;
  className?: string;
};


export default function MainContent({ 
  handle,
  subHandle='',
  className = '' 
}: MainContentProps) {

  useTabInitializer(handle, subHandle);
  
  switch (handle) {
    case "home":
      return <HomeTabs />;
    case "skills":
      return <SkillsTabs />;
    case "experiences":
      return <ExperiencesTabs />;
    default:
      return null;
  }
}


