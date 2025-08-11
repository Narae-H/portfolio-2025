"use client";

import Workspace from "@/app/components/common/workspace";
import { Tab } from "@/app/components/main/TabsPanel";
import { mainMenus } from "@/data/menu/mainMenu";
import skillDataMap from "@/data/skills";
import useVisitedTabs from "@/lib/hooks/useVisitedTabs";
import { findMenuItemById } from "@/lib/utils/menu";
import { MenuItem } from "@/models/menu";
import SkillsWelcomeContent from "./SkillsWelcomeContent";
import HomeContent from "./HomeContent";

export function homeTabs(): Tab[] {
  return [
    {
      id: "welcome",
      title: "Welcome",
      iconKey: "VscVscode",
      style: { color: "text-blue-500", size: "13px" },
      link: "/",
      content: <HomeContent />,
    },
  ];
}

export function skillsTabs(): Tab[] {
  const { visitedTabs } = useVisitedTabs("visited_skills");

  const skillMenu = mainMenus.menus.find((menu) => menu.id === "skills");
  const foundItems: MenuItem[] = visitedTabs
    .map((title) => findMenuItemById(skillMenu?.items ?? [], title))
    .filter((item): item is typeof item => Boolean(item)) as MenuItem[];

  const tabs: Tab[] = [
    {
      id: "welcome",
      title: "Welcome",
      iconKey: "VscCode",
      style: { size: "13px" },
      link: "/skills",
      content: <SkillsWelcomeContent />,
    },
    ...foundItems.map((item) => ({
      id: item.id,
      title: item.title,
      iconKey: item.iconKey,
      style: item.style,
      link: item.link,
      content: <Workspace menuCategory="skills" menuId={item.id as keyof typeof skillDataMap} />,
    })),
  ];

  return tabs;
}

export function experiencesTabs(): Tab[] {
  // TODO: experiencesTabs 구현
  return [];
}
