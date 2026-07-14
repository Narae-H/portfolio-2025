'use client';

import Activitybar from "@/app/components/layout/activitybar/Activitybar";
import Footer from "@/app/components/layout/footer/Footer";
import Header from "@/app/components/layout/header/Header";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { isMobile } = useDeviceDetection();

  return (
    <>
      <Header className="flex h-14 flex-shrink-0" />

      <div className="flex flex-1 min-w-0 min-h-0 h-full basis-0 overflow-hidden">
        {!isMobile && <Activitybar className="flex w-18 h-auto" />}
        {children}
      </div>

      <Footer className="flex h-[25px] flex-shrink-0" />
    </>
  );
}
