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
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="h-full w-full relative">
      <div
        ref={scrollContainerRef}
        className="h-full lg:h-[48vh] w-full overflow-y-auto focus:outline-none"
      >
        {children}
      </div>
      {isDesktop && <ScrollToTopButton onClick={handleScrollToTop} />}
    </div>
  );
}
