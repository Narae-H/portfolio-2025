"use client"

import { useRef } from "react";
import { Tab } from "./TabsPanel";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import ScrollToTopButton from "../../common/workspace/ScrollToTopButton";

type TabsContentProps = {
  tabs: Tab[];
  selectedTab?: string;
}

export default function TabsContent({
  tabs,
  selectedTab
}: TabsContentProps) {
  const { isDesktop } = useDeviceDetection();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="
        flex flex-1 basis-0
        min-h-0 h-full
        bg-tabs-content-bg
        overflow-y-auto
        lg:overflow-y-hidden
      "
    >
      {tabs.find((tab) => tab.id === selectedTab)?.content}
      {!isDesktop && (<ScrollToTopButton onClick={handleScrollToTop} />)}
    </div>
  )
}