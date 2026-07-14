import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { Metadata } from "next";
import { resolveSubCategoryTitle } from "@/lib/utils/titles";

type PageProps = {
  params: Promise<{ category: string, subCategory: string }>;
  searchParams: Promise<Record<string, string>>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subCategory } = await params;
  return { title: resolveSubCategoryTitle(category, subCategory) };
}

export default async function SubPage({ params }: PageProps) {
  const { category, subCategory } = await params;

  return (
    <>
      <Sidebar category={category} />
      <MainContent category={category} subCategory={subCategory} />
    </>
  );
}
