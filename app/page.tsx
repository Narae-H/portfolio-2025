import { Metadata } from "next";
import Link from "next/link";

import { BsPerson } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";
import { VscCode, VscFiles, VscFolderLibrary, VscVscode } from "react-icons/vsc";
import { SiSpringboot } from "react-icons/si";
import { FaDocker, FaReact } from "react-icons/fa";

import List, { ListItem } from "@/app/components/common/List";
import Card, { CardItem } from "./components/common/Card";
import MainContent from "@/app/components/main/MainContent";
import { Tab } from "@/app/components/main/TabsPanel";

export const metadata: Metadata = {
  title: "Narae's Portfolio",
  description: "My portfolio site",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <MainContent tabs={tabs} defaultTabId="welcome" />;
}

function Content() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="flex flex-col justify-center w-11/12 sm:w-8/12 pt-10">
        <header className="flex flex-col pb-12">
          <h1 className="text-5xl text-tabs-content-text font-[mono-space-neon] mb-2">Narae Hyeon</h1>
          <h2 className="text-2xl sm:text-3xl text-tabs-content-text-secondary">Full Stack Java Developer</h2>
        </header>

        <div className="flex flex-wrap mx-4">
          <section className="w-full lg:w-1/2 px-4 mb-8">
            <List title="Contents" listItems={contentList} className="mb-10" />
            <List title="Experiences" listItems={expList} />
            <Link href="/experiences" className="flex text-list-link-text pl-5 mt-1">
              More...
            </Link>
          </section>

          <section className="w-full lg:w-1/2 px-4 mb-8">
            <Card title="Skills" cardItems={skillList} />
            <Link href="/skills" className="flex text-list-link-text pl-5 mt-1">
              More...
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

const tabs: Tab[] = [
  {
    id: "welcome",
    title: "Welcome",
    Icon: <VscVscode className="w-6 h-6 text-blue-500" />,
    link: "/",
    content: <Content />,
  },
];

const contentList: ListItem[] = [
  { id: "home", title: "Home", Icon: <VscFiles />, link: "/" },
  { id: "skills", title: "Skills", Icon: <VscCode />, link: "/skills" },
  { id: "experiences", title: "Experiences", Icon: <VscFolderLibrary />, link: "/experiences" },
];

const expList: ListItem[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    Icon: <BsPerson />,
    link: "/",
    description:
      "Developed with Next.js and TypeScript, focusing on responsive design, clean code, and automated deployment.",
  },
  {
    id: "mymc-portfolio",
    title: "My Muscle Chef Clone",
    Icon: <GiMuscleUp />,
    link: "/",
    description:
      "Built to showcase modern frontend skills and API integration through a partial My Muscle Chef clone.",
  },
  {
    id: "build-ci-cd-pipeline",
    title: "Build CI/CD Pipeline",
    Icon: <LuConstruction />,
    link: "/skills",
    description: "Built a pipeline for Continuous Integration (CI) and Development (CD).",
  },
];

const skillList: CardItem[] = [
  {
    id: "react-next",
    title: "React/Next.js",
    Icon: <FaReact color="#5ed3f3" size={24} />,
    link: "/react-next",
    description:
      "Experienced in building modern, high-performance web applications with React and Next.js, using server-side rendering, static site generation, and component-based architecture for scalable solutions.",
  },
  {
    id: "ci-cd-pipeline",
    title: "CI/CD Pipeline",
    Icon: <FaDocker color="#1D63ED" size={24} />,
    link: "/ci-cd-pipeline",
    description:
      "Proficient in designing CI/CD pipelines with GitHub Actions, Docker, AWS Elastic Beanstalk, and ECS to enable automated, scalable, and reliable deployments.",
  },
  {
    id: "spring-boot",
    title: "Spring Boot (Java)",
    Icon: <SiSpringboot color="#6ca84e" size={24} />,
    link: "/spring-boot",
    description:
      "Experience with RESTful APIs, implementing security features, and managing configurations using Spring Boot to deliver modular, flexible, and high-performing solutions.",
  },
];
