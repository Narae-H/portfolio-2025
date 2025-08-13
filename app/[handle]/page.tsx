import { Metadata } from "next";

import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";

export const metadata: Metadata = {
  title: "Narae's Portfolio",
  description: "My portfolio site",
  icons: {
    icon: "/favicon.ico",
  },
};

type PageProps = {
  params: Promise<{ handle: string }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function Page({ params }: PageProps) {
  const { handle } = await params;

  return (
    <>
      <Sidebar handle={handle} />
      <MainContent handle={handle} />
    </>
  );
}


