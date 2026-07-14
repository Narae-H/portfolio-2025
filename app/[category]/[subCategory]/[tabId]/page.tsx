import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { Metadata } from "next";
import { resolveTabTitle } from "@/lib/utils/titles";

type PageProps = {
  params: Promise<{ category: string, subCategory: string, tabId: string }>;
  searchParams: Promise<Record<string, string>>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, tabId } = await params;
  return { title: resolveTabTitle(category, tabId) };
}

export default async function SubPage({ params }: PageProps) {
  const { category, subCategory, tabId } = await params;

  return (
    <>
      <Sidebar category={category} />
      <MainContent category={category} subCategory={subCategory} tabId={tabId}/>
    </>
  );
}
