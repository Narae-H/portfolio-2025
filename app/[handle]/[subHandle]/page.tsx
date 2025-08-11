import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { Metadata } from "next";
import ClientHandler from "./ClientHandler";

// TODO:!!! 여기서 부터 시작! localstorage에 없는 새로운 submenu가 들어올경우 MainContent리랜더링 안됨.
export const metadata: Metadata = {
  title: "Narae's Portfolio",
  description: "My portfolio site",
  icons: {
    icon: "/favicon.ico",
  },
};

type PageProps = {
  params: Promise<{ handle: string, subHandle: string }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function SubPage({ params }: PageProps) {
  const { handle, subHandle } = await params;
  console.log("/[subHandle]/page.tsx")

  return (
    <div className="flex flex-1 h-auto">
      <ClientHandler handle={handle} subHandle={subHandle} />
      <Sidebar handle={handle} />
      <MainContent handle={handle} selectedTab={subHandle} />
    </div>
  );
}
