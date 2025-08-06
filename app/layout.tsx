'use client'
import Footer from "@/app/components/layout/footer/Footer";
import Header from "@/app/components/layout/header/Header";
import { useState } from "react";
import "./globals.css";
import Activitybar from "@/app/components/layout/Activitybar";

// TODO: 나중에 useState() 를 localstorage하는걸로 바꾸고 나면 'use client' 삭제하고 적용하기
// export const metadata: Metadata = {
//   title: "Narae's Portfolio",
//   description: 'My portfolio site',
//   icons: {
//     icon: "/favicon.ico"
//   }
// };

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
        <Header className="flex h-15 flex-shrink-0"/>

        <div className="flex flex-1 h-full overflow-hidden">
          <Activitybar className="flex w-18 h-auto"/>
          {children}
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        
        <Footer className="flex h-8 flex-shrink-0"/>
      </body>
    </html>
  );
}
