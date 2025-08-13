import { MenuItem } from "@/models/menu";
import Card, { CardItem } from "../common/Card";
import { FaDocker, FaReact } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import List from "../common/List";
import Link from "next/link";

export default function HomeContent() {
  const contentList: MenuItem[] = [
  { id: "home", title: "Home", iconKey: "VscFiles", link: "/" },
  { id: "skills", title: "Skills", iconKey: "VscCode", link: "/skills" },
  { id: "experiences", title: "Experiences", iconKey: "VscFolderLibrary", link: "/experiences" },
  ];
  
  const expList: MenuItem[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    iconKey: "BsPerson",
    link: "/",
    description:
      "Developed with Next.js and TypeScript, focusing on responsive design, clean code, and automated deployment.",
  },
  {
    id: "mymc-portfolio",
    title: "My Muscle Chef Clone",
    iconKey: "GiMuscleUp",
    link: "/",
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
  
  const skillList: CardItem[] = [
  {
    id: "reactnext",
    title: "React/Next.js",
    Icon: <FaReact color="#5ed3f3" size={24} />,
    link: "/skills/reactnext",
    description:
      "Experienced in building modern, high-performance web applications with React and Next.js, using server-side rendering, static site generation, and component-based architecture for scalable solutions.",
  },
  {
    id: "cicdpipeline",
    title: "CI/CD Pipeline",
    Icon: <FaDocker color="#1D63ED" size={24} />,
    link: "/skills/cicdpipeline",
    description:
      "Proficient in designing CI/CD pipelines with GitHub Actions, Docker, AWS Elastic Beanstalk, and ECS to enable automated, scalable, and reliable deployments.",
  },
  {
    id: "springboot",
    title: "Spring Boot (Java)",
    Icon: <SiSpringboot color="#6ca84e" size={24} />,
    link: "/skills/springboot",
    description:
      "Experience with RESTful APIs, implementing security features, and managing configurations using Spring Boot to deliver modular, flexible, and high-performing solutions.",
  },
  ];

  return (
    <div className="flex w-full h-full justify-center overflow-y-auto">
      <div className="flex flex-col md:justify-center w-full sm:w-8/12 h-full pt-10">
        <header className="flex flex-col pb-12">
          <h1 className="text-5xl text-tabs-content-text font-[mono-space-neon] mb-2">Narae Hyeon</h1>
          <h2 className="text-2xl sm:text-3xl text-tabs-content-text-secondary">Full Stack Java Developer</h2>
        </header>

        <div className="flex flex-wrap mx-4">
          <section className="w-full lg:w-1/2 px-4 mb-8">
            <List title="Contents" listItems={contentList} className="mb-10" />
            <List title="Experiences" listItems={expList} className="pr-10 w-10/12"/>
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