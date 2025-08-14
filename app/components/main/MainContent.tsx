'use client'

import useTabInitializer from "@/lib/hooks/useTabInitializer";
import { ExperiencesTabs, HomeTabs, SkillsTabs } from "./tabsConfig";

type MainContentProps = {
  category: string;
  subCategory?: string;
  tabId?: string;
  defaultTabId?: string;
  className?: string;
};


export default function MainContent({ 
  category,
  subCategory='',
  tabId='',
}: MainContentProps) {

  useTabInitializer(category, subCategory, tabId);
  
  switch (category) {
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


