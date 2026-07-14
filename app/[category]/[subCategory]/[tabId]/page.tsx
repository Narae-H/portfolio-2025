import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { Metadata } from "next";
import { toTitleCase } from "@/lib/utils/text";

type PageProps = {
  params: Promise<{ category: string, subCategory: string, tabId: string }>;
  searchParams: Promise<Record<string, string>>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subCategory, tabId } = await params;
  return { title: `${toTitleCase(tabId)} · ${toTitleCase(subCategory)}` };
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
