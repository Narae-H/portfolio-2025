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
  params: Promise<{category: string}>;
  searchParams: Promise<Record<string, string>>;
};

export default async function Page({ params }: PageProps) {
  const { category } = await params;

  return (
    <>
      <Sidebar category={category} />
      <MainContent category={category} />
    </>
  );
}


