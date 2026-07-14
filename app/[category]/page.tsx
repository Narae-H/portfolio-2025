import { Metadata } from "next";

import MainContent from "@/app/components/main/MainContent";
import Sidebar from "@/app/components/main/Sidebar";
import { toTitleCase } from "@/lib/utils/text";

type PageProps = {
  params: Promise<{category: string}>;
  searchParams: Promise<Record<string, string>>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  return { title: toTitleCase(category) };
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;

  return (
    <>
      <Sidebar category={category} />
      <MainContent category={category} />
    </>
  );
}


