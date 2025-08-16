'use client'

import { useRef, useEffect } from "react";
import Icon from "@/app/components/common/Icon";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { VscChromeClose } from "react-icons/vsc";
import { Tab } from "./TabsPanel";

type TabsHeaderProps = {
  tabs: Tab[];
  selectedTab?: string;
  onCloseTab?: (id: string) => void;
  onSelectTab?: (category: string, id: string) => void;
}

export default function TabsHeader({
  tabs,
  selectedTab,
  onCloseTab,
  onSelectTab
}: TabsHeaderProps) {
  const { category } = useParams();
  const router = useRouter();

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleTabClick = (categoryId: string, tabId: string) => {
    onSelectTab?.(categoryId, tabId);
  };

  const handleCloseTab = (tabId: string) => {
    onCloseTab?.(tabId);
    if (category && selectedTab === tabId) {
      router.replace(`/${category}`);
    }
  };

  // When a selected tab is outside of layout, then auto-scroll
  useEffect(() => {
    if (selectedTab && tabRefs.current[selectedTab] && tabsContainerRef.current) {
      const tabEl = tabRefs.current[selectedTab]!;
      const container = tabsContainerRef.current;
      const tabLeft = tabEl.offsetLeft;
      const tabRight = tabEl.offsetLeft + tabEl.offsetWidth;
      const containerScrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;

      if (tabLeft < containerScrollLeft) {
        container.scrollTo({ left: tabLeft, behavior: "smooth" });
      } else if (tabRight > containerScrollLeft + containerWidth) {
        container.scrollTo({ left: tabRight - containerWidth, behavior: "smooth" });
      }
    }
  }, [selectedTab]);

  return (
    <div className="flex flex-row">
      <div
        ref={tabsContainerRef}
        className="
          flex
          h-[39px] 
          whitespace-nowrap 
          tabs-scroll
          overflow-x-hidden overflow-y-hidden
          hover:overflow-x-auto
        "
      >
        {tabs.map((tab) => {
          const isActive = selectedTab === tab.id;
          return (
            <div
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el; }}
              className={`
                inline-flex
                h-[39px] 
                px-1
                items-center 
                select-none
                border-1 border-l-transparent border-r-tabs-tab-border border-b-tabs-tab-border border-t-transparent hover:bg-tabs-tab-hover-bg 
                ${isActive ? "bg-tabs-tab-active-bg !border-t-tabs-tab-active-border !border-b-tabs-tab-active-bg" : "border-t-1 border-transparent"}
              `}
              onClick={() => handleTabClick(tab.categoryId ?? '', tab.id)}
            >
              <Link href={tab.link ?? ''} className="flex items-center gap-2 px-4 h-full cursor-pointer">
                {tab.iconKey && <Icon name={tab.iconKey} {...tab.style} />}
                <div>{tab.title}</div>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCloseTab(tab.id);
                }}
                className="p-2 text-gray-400 focus:outline-none cursor-pointer rounded-md hover:bg-tabs-tab-hover-text"
              >
                <VscChromeClose />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex-1 border-b-1 border-b-tabs-content-border" />
    </div>
  );
}
