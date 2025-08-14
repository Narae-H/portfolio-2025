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
  params: Promise<{ category: string, subCategory: string }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function SubPage({ params }: PageProps) {
  const { category, subCategory } = await params;

  return (
    <>
      <Sidebar category={category} />
      <MainContent category={category} subCategory={subCategory} />
    </>
  );
}
