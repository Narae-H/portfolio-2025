import Link from "next/link";

import Card, { CardItem } from "@/app/components/common/Card";
import List from "@/app/components/common/List";
import { MenuItem } from "@/models/menu";

export default function HomeContent() {
  const contentList: MenuItem[] = [
  { id: "home", title: "Home", iconKey: "VscFiles", link: "/" },
  { id: "experiences", title: "Experiences", iconKey: "VscFolderLibrary", link: "/experiences" },
  { id: "skills", title: "Skills", iconKey: "VscCode", link: "/skills" }
  ];
  
  const expList: CardItem[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    iconKey: "IoPerson",
    link: "/experiences/australia/portfolio",
    description:
      "This VS Code-themed portfolio, built with Next.js and TypeScript — responsive design, clean code, and automated deployment.",
  },
  {
    id: "hhlawyerswebsiterebuild",
    title: "H & H Lawyers Website Rebuild",
    iconKey: "CgBrowser",
    link: "/experiences/australia/hhlawyerswebsiterebuild",
    description:
      "End-to-end rebuild of a four-language law-firm platform — Spring Boot MSA backend and React/Next.js frontend on AWS, built agent-first.",
  },
  {
    id: "groundeddoc",
    title: "GroundedDoc (in progress)",
    iconKey: "MdOutlineContentPasteSearch",
    link: "/experiences/australia/groundeddoc",
    description:
      "An AI document Q&A app that answers only from uploaded sources with clause-level citations. Next.js, TypeScript, Supabase, Claude API.",
  },
  ];
  
  const skillList: MenuItem[] = [
  {
    id: "ainativeengineering",
    title: "AI-Native Engineering",
    iconKey: "FaRobot",
    link: "/skills/ai/ainativeengineering",
    description:
      "Agent-first development with Claude Code — SDLC sub-agents, skills, slash commands, and hook gates, held to a two-layer safety model of deterministic gates plus human review.",
  },
  {
    id: "java",
    title: "Java",
    iconKey: "FaJava",
    link: "/skills/backend/java",
    description:
      "Over 8 years building enterprise back-end systems — OOP and design patterns, multi-module Gradle projects, and high-traffic, mission-critical applications.",
  },
  {
    id: "react",
    title: "React",
    iconKey: "FaReact",
    link: "/skills/frontend/react",
    description:
      "Building modern, responsive SPAs with React and Next.js — hooks, reusable components, and performance optimisation, used in production.",
  },
  ];

  return (
    <div className="flex w-full min-h-full justify-center">
      <div className="flex flex-col w-10/12 md:w-8/12 h-auto my-auto py-10">
        <header className="flex flex-col pb-12">
          <h1 className="text-5xl text-tabs-content-text font-[mono-space-neon] mb-2">Narae Hyeon</h1>
          <h2 className="text-2xl sm:text-3xl text-tabs-content-text-secondary">Software Engineer</h2>
        </header>

        <div className="flex flex-wrap h-auto">
          <section className="w-full h-auto lg:w-1/2 mb-8">
            <List title="Contents" listItems={contentList} className="mb-10" />
            <List title="Skills" listItems={skillList} className="pr-10 w-full"/>
            <Link href="/skills" className="flex text-list-link-text pl-5 mt-1">
              More...
            </Link>
          </section>

          <section className="w-full h-auto lg:w-1/2 mb-8">
            <Card title="Experiences" cardItems={expList} />
            <Link href="/experiences" className="flex text-list-link-text pl-5 mt-1">
              More...
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}