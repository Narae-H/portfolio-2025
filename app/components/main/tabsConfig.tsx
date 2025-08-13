import Workspace from "@/app/components/common/workspace";
import TabsPanel, { Tab } from "@/app/components/main/TabsPanel";
import { mainMenus } from "@/data/menu/mainMenu";
import skillDataMap from "@/data/skills";
import useVisitedTabs from "@/lib/hooks/useVisitedTabs";
import { findMenuItemById } from "@/lib/utils/menu";
import { MenuItem } from "@/models/menu";
import HomeContent from "./HomeContent";
import SkillsWelcomeContent from "./SkillsWelcomeContent";
import { useRouter } from "next/navigation";
import useSelectedTab from "@/lib/hooks/useSelectedTab";

export function HomeTabs() {
  const tabs =  [
    {
      id: "welcome",
      title: "Welcome",
      iconKey: "VscVscode",
      style: { color: "text-blue-500", size: "13px" },
      link: "/",
      content: <HomeContent />,
    },
  ];

  return (
    <TabsPanel tabs={tabs} />
  )
}

export function SkillsTabs(){
  const router = useRouter();
  const { visitedTabs, closeTab } = useVisitedTabs("visited_skills");
  const { selectedTab, setSelectedTab, clearSelectedTab } = useSelectedTab("selected_skills_tab");

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

  const handleCloseTab = (tabId: string) => {
    const isActive = tabId === selectedTab;
    closeTab(tabId);
    
    if (isActive) {
      clearSelectedTab();
      router.replace("/skills");
    }
  };

  const handleSelectTab = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return <TabsPanel tabs={tabs} selectedTab={selectedTab} onCloseTab={handleCloseTab} onSelectTab={handleSelectTab}/>;
}

export function ExperiencesTabs() {
  const tabs: Tab[] = [];
  return <TabsPanel tabs={tabs} />;
}
