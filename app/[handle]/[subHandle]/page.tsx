import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { Metadata } from "next";

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

  return (
    <>
      <Sidebar handle={handle} />
      <MainContent handle={handle} subHandle={subHandle} />
    </>
  );
}
