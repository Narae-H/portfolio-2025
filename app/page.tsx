import { Metadata } from "next";


import MainContent from "@/app/components/main/MainContent";

export const metadata: Metadata = {
  title: "Narae's Portfolio",
  description: "My portfolio site",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return(
    <MainContent handle="home" />
  )
}
