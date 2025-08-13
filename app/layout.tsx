'use client'
import Activitybar from "@/app/components/layout/activitybar/Activitybar";
import Footer from "@/app/components/layout/footer/Footer";
import Header from "@/app/components/layout/header/Header";
import { useDeviceDetection } from "@/lib/hooks/useDeviceDetection";
import { useTheme } from "@/lib/hooks/useTheme";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  const { isMobile } = useDeviceDetection();
  
  return (
    <html lang="en" data-theme={theme}>
      <body className="min-h-screen flex flex-col min-w-[360px]">
        <StoreProvider>
          <Header className="flex h-14 flex-shrink-0"/>

          <div className="flex flex-1 h-full min-w-0 overflow-hidden">
            {!isMobile && <Activitybar className="flex w-18 h-auto"/> }
            {children}
          </div>
          
          <Footer className="flex h-[25px] flex-shrink-0"/>
        </StoreProvider>
      </body>
    </html>
  );
}
