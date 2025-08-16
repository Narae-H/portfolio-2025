import Link from "next/link";

import Card, { CardItem } from "@/app/components/common/Card";
import List from "@/app/components/common/List";
import { MenuItem } from "@/models/menu";

export default function HomeContent() {
  const contentList: MenuItem[] = [
  { id: "home", title: "Home", iconKey: "VscFiles", link: "/" },
  { id: "skills", title: "Skills", iconKey: "VscCode", link: "/skills" },
  { id: "experiences", title: "Experiences", iconKey: "VscFolderLibrary", link: "/experiences" },
  ];
  
  const expList: CardItem[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    iconKey: "IoPerson",
    link: "/",
    description:
      "Developed with Next.js and TypeScript, focusing on responsive design, clean code, and automated deployment.",
  },
  {
    id: "mymc-portfolio",
    title: "My Muscle Chef Clone",
    iconKey: "GiMuscleUp",
    link: "/experiences/australia/mymusclechefclone",
    description:
      "Built to showcase modern frontend skills and API integration through a partial My Muscle Chef clone.",
  },
  {
    id: "buildcicdpipeline",
    title: "Build CI/CD Pipeline",
    iconKey: "LuConstruction",
    link: "/skills",
    description: "Built a pipeline for Continuous Integration (CI) and Development (CD).",
  },
  ];
  
  const skillList: MenuItem[] = [
  {
    id: "reactnext",
    title: "React/Next.js",
    iconKey: "FaReact",
    link: "/skills/reactnext",
    description:
      "Experienced in building modern, high-performance web applications with React and Next.js, using server-side rendering, static site generation, and component-based architecture for scalable solutions.",
  },
  {
    id: "cicdpipeline",
    title: "CI/CD Pipeline",
    iconKey: "FaDocker",
    link: "/skills/cicdpipeline",
    description:
      "Proficient in designing CI/CD pipelines with GitHub Actions, Docker, AWS Elastic Beanstalk, and ECS to enable automated, scalable, and reliable deployments.",
  },
  {
    id: "springboot",
    title: "Spring Boot (Java)",
    iconKey: "SiSpringboot",
    link: "/skills/springboot",
    description:
      "Experience with RESTful APIs, implementing security features, and managing configurations using Spring Boot to deliver modular, flexible, and high-performing solutions.",
  },
  ];

  return (
    <div className="flex w-full h-auto justify-center">
      <div className="flex flex-col lg:justify-center w-10/12 md:w-8/12 h-auto pt-10">
        <header className="flex flex-col pb-12">
          <h1 className="text-5xl text-tabs-content-text font-[mono-space-neon] mb-2">Narae Hyeon</h1>
          <h2 className="text-2xl sm:text-3xl text-tabs-content-text-secondary">Full Stack Developer</h2>
        </header>

        <div className="flex flex-wrap h-auto">
          <section className="w-full h-auto lg:w-1/2 mb-8">
            <List title="Contents" listItems={contentList} className="mb-10" />
            <List title="Skills" listItems={skillList} className="pr-10 w-full"/>
            <Link href="/experiences" className="flex text-list-link-text pl-5 mt-1">
              More...
            </Link>
          </section>

          <section className="w-full h-auto lg:w-1/2 mb-8">
            <Card title="Experiences" cardItems={expList} />
            <Link href="/skills" className="flex text-list-link-text pl-5 mt-1">
              More...
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}