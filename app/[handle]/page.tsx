import { Metadata } from "next";
import { FaHome, FaUser } from "react-icons/fa";

import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { Tab } from "@/app/components/main/TabsPanel";

export const metadata: Metadata = {
  title: "Narae's Portfolio",
  description: 'My portfolio site',
  icons: {
    icon: "/favicon.ico"
  }
};

export default function Page() {

  // TODO: 임시로 만들어둠. 나중에 skills, experiences할때는 localstorage에 저장하기
  const tabs: Tab[] = [
    {
      id: "welcome",
      title: "Welcome",
      Icon: <FaHome />,
      link: "/experiences",
      content: <></>
    },
    {
      id: "home",
      title: "Profile",
      Icon: <FaUser />,
      link: "/profile",
      content: <></>
    },
  ]

  return (
    <div className="flex flex-1 h-auto">
      <Sidebar className="flex bg-sidebar-bg text-sidebar-text w-82 h-full border-r-1 border-sidebar-border"/>
      <MainContent tabs={tabs} defaultTabId="welcome" />
    </div>
  );
}
