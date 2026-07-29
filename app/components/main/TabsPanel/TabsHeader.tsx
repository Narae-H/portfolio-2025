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
    const container = tabsContainerRef.current;
    const tabEl = selectedTab ? tabRefs.current[selectedTab] : null;
    if (!container || !tabEl) return;

    // Stop any smooth scroll still running for the previous tab, or it wins
    container.scrollTo({ left: container.scrollLeft });

    const containerRect = container.getBoundingClientRect();
    const tabRect = tabEl.getBoundingClientRect();

    // offsetLeft is relative to the sidebar/activity bar, so measure against the strip
    const tabStart = tabRect.left - containerRect.left + container.scrollLeft;
    const tabEnd = tabStart + tabRect.width;
    const viewStart = container.scrollLeft;
    const viewEnd = viewStart + container.clientWidth;

    if (tabStart < viewStart) {
      container.scrollTo({ left: tabStart, behavior: "smooth" });
    } else if (tabEnd > viewEnd) {
      container.scrollTo({ left: tabEnd - container.clientWidth, behavior: "smooth" });
    }
  }, [selectedTab, tabs.length]);

  return (
    <div className="flex flex-row">
      <div
        ref={tabsContainerRef}
        className="
          flex
          h-[39px]
          min-w-0
          whitespace-nowrap
          tabs-scroll
          overflow-x-auto overflow-y-hidden
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
            >
              <Link
                href={tab.link ?? ''}
                onClick={() => handleTabClick(tab.categoryId ?? '', tab.id)}
                className="flex items-center gap-2 px-4 h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tabs-tab-active-border"
              >
                {tab.iconKey && <Icon name={tab.iconKey} {...tab.style} />}
                <div>{tab.title}</div>
              </Link>

              <button
                type="button"
                aria-label={`Close ${tab.title} tab`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCloseTab(tab.id);
                }}
                className="p-2 text-gray-400 outline-none focus-visible:ring-2 focus-visible:ring-tabs-tab-active-border cursor-pointer rounded-md hover:bg-tabs-tab-hover-text"
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
