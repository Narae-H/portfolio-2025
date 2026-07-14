'use client'

import { useRef } from "react";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import ScrollToTopButton from "@/app/components/common/workspace/ScrollToTopButton";

type ScrollableTabPanelProps = {
  children: React.ReactNode;
};

export default function ScrollableTabPanel({ children }: ScrollableTabPanelProps) {
  const { isDesktop } = useDeviceDetection();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Desktop: fill remaining space under the fixed header and scroll internally.
    // Mobile: flow with content (the outer editor area scrolls instead).
    <div className="relative flex flex-col w-full lg:flex-1 lg:min-h-0">
      <div
        ref={scrollContainerRef}
        className="w-full lg:h-full lg:overflow-y-auto"
      >
        {children}
      </div>
      {isDesktop && <ScrollToTopButton onClick={handleScrollToTop} />}
    </div>
  );
}
