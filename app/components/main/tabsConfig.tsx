import Workspace from "@/app/components/common/workspace";
import TabsPanel, { Tab } from "@/app/components/main/TabsPanel";
import { mainMenus } from "@/data/menu/mainMenu";
import useSelectedTab from "@/lib/hooks/useSelectedTab";
import useVisitedTabs from "@/lib/hooks/useVisitedTabs";
import { findMenuItemById } from "@/lib/utils/menu";
import { MenuItem } from "@/models/menu";
import HomeContent from "@/app/components/main/HomeContent";
import WelcomeContent from "./WelcomeContent";
import experiencesDataMap from "@/data/experiences";
import skillDataMap from "@/data/skills";

export function HomeTabs() {
  const { selectedTab } = useSelectedTab("selected_home_tab");

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
    <TabsPanel tabs={tabs} selectedTab={selectedTab}/>
  )
}

export function SkillsTabs(){
  const category = "skills";
  const { visitedTabs, closeTab } = useVisitedTabs(`visited_${category}`);
  const { selectedTab, setSelectedTab } = useSelectedTab(`selected_${category}_tab`);

  const skillMenu = mainMenus.menus.find((menu) => menu.id === category);

  const foundItems = visitedTabs
    .map((title) => findMenuItemById(skillMenu?.items ?? [], title))
    .filter((item): item is MenuItem => item !== undefined);

  const tabs: Tab[] = [
    {
      id: "welcome",
      title: "Welcome",
      iconKey: "VscCode",
      style: { size: "13px" },
      link: "/skills",
      content: <WelcomeContent contentMenu={skillMenu} />,
    },
    ...foundItems.map((item) => ({
      id: item.id,
      title: item.title,
      iconKey: item.iconKey,
      style: item.style,
      link: item.link?? '#',
      content: <Workspace menuCategory={category} tabId={item.id as keyof typeof skillDataMap}/>,
    })),
  ];

  return <TabsPanel tabs={tabs} selectedTab={selectedTab} onCloseTab={closeTab} onSelectTab={setSelectedTab} />;
}

export function ExperiencesTabs() {
  const category = "experiences";
  const { visitedTabs, closeTab } = useVisitedTabs(`visited_${category}`);
  const { selectedTab, setSelectedTab } = useSelectedTab(`selected_${category}_tab`);

  const experienceMenu = mainMenus.menus.find((menu) => menu.id === category);

  const foundItems = visitedTabs
    .map((title) => findMenuItemById(experienceMenu?.items ?? [], title))
    .filter((item): item is MenuItem => item !== undefined);

  const tabs: Tab[] = [
    {
      id: "welcome",
      title: "Welcome",
      iconKey: "VscCode",
      style: { size: "13px" },
      link: "/skills",
      content: <WelcomeContent contentMenu={experienceMenu} />,
    },
    ...foundItems.map((item) => ({
      id: item.id,
      title: item.title,
      iconKey: item.iconKey,
      style: item.style,
      link: item.link?? '#',
      content: <Workspace menuCategory={category} tabId={item.id as keyof typeof experiencesDataMap}/>,
    })),
  ];

  return <TabsPanel tabs={tabs} selectedTab={selectedTab} onCloseTab={closeTab} onSelectTab={setSelectedTab} />;
}
