'use client'
import { useState } from "react";
import "./globals.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Workspace from "@/app/components/common/Workspace";
import ActivityBar from "@/app/components/common/Activitybar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: 나중에 LocalStorage 하는걸로 바꿔야 함. 현재는 확인위해서 토글 버튼으로 임시 조치
  const [theme, setTheme] = useState('tokyonight-theme');

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'tokyonight-theme' ? 'dark-theme' : 'tokyonight-theme'
    );
  };

  return (
    <html lang="en" data-theme={theme}>
      <body className="min-h-screen flex flex-col">
        <Header className="flex h-10 flex-shrink-0"/>

        <div className="flex flex-1">
          <ActivityBar className="flex w-20 h-full"/>
          <Workspace className="flex-1 h-full"> {children} </Workspace>
        </div>
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        
        <Footer className="flex h-6 flex-shrink-0"/>
      
      </body>
    </html>
  );
}
