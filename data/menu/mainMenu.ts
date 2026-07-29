import { MenuItem } from "@/models/menu";

export type MainMenu = {
  _comment: string,
  menus: MenuItem[]
}

export const mainMenus: MainMenu = {
  "_comment" : "Main navigation menus",
  "menus": [
    {
      id: "home",
      title: "Home",
      tooltip: "Home",
      iconKey: "VscFiles",
      link: "/home"
    },
    {
      id: "experiences",
      title: "Experiences",
      tooltip: "Experiences",
      iconKey: "VscFolderLibrary",
      "items": [
        {
          id: "hhlawyers",
          title: "H & H Lawyers · Sydney",
          items: [
            { id: "platformrebuild", title: "Platform Rebuild", link: "/experiences/hhlawyers/platformrebuild", iconKey: "CgBrowser", style: { color: '#115f42', size: '13px'} },
            { id: "oneclicktrademark", title: "One Click Trade Mark", link: "/experiences/hhlawyers/oneclicktrademark", iconKey: "GiClick", style: { color: '#0056A3', size: '13px'} },
            { id: "websitemigration", title: "Website & Server Migration", link: "/experiences/hhlawyers/websitemigration", iconKey: "BsServer", style: { color: '#4E7D9D', size: '13px'} },
            { id: "internalsystems", title: "Internal Systems & Reporting", link: "/experiences/hhlawyers/internalsystems", iconKey: "MdOutlineManageHistory", style: { color: '#be9469', size: '13px'} },
          ],
        },
        {
          id: "pndps",
          title: "PNDPS · Korea",
          items: [
            { id: "hyundaimobis", title: "Hyundai Mobis", link: "/experiences/pndps/hyundaimobis", iconKey: "FaCar", style: { color: '#002C5F', size: '13px'} },
            { id: "pyeongchang2018", title: "PyeongChang 2018 Olympics", link: "/experiences/pndps/pyeongchang2018", iconKey: "PiTrafficSignalFill", style: { color: '#4e7d9d', size: '13px'} },
            { id: "samsungstms", title: "Samsung Electronics STMS", link: "/experiences/pndps/samsungstms", iconKey: "TbBrandSamsungpass", style: { color: '#1428A0', size: '13px'} },
            { id: "dassaultplmpoc", title: "Dassault Systèmes PLM PoC", link: "/experiences/pndps/dassaultplmpoc", iconKey: "GiCycle", style: { color: '#e43900', size: '13px'} },
          ],
        },
        {
          id: "personal",
          title: "Personal",
          items: [
            { id: "groundeddoc", title: "GroundedDoc (in progress)", link: "/experiences/personal/groundeddoc", iconKey: "MdOutlineContentPasteSearch", style: { color: '#3FCF8E', size: '13px'} },
            { id: "portfolio", title: "Portfolio Site", link: "/experiences/personal/portfolio", iconKey: "IoPerson", style: { color: "#065F46", size: '13px'} },
          ],
        },
      ],
    },
    {
      id: "skills",
      title: "Skills",
      tooltip: "Skills",
      iconKey: "VscCode",
      "items": [
        {
          id: "ai",
          title: "AI Engineering",
          items: [
            { id: "ainativeengineering", title: "AI-Native Engineering", link: "/skills/ai/ainativeengineering", iconKey: "FaRobot", style: { color: '#D97757', size: '13px' } },
          ],
        },
        {
          id: "backend",
          title: "Backend",
          items: [
            { id: "java", title: "Java", link: "/skills/backend/java", iconKey: "FaJava", style: { color: '#cc3e44', size: '13px' } },
            { id: "springboot", title: "Spring Boot", link: "/skills/backend/springboot", iconKey: "SiSpringboot", style: { color: '#6ca84e', size: '13px' } },
          ],
        },
        {
          id: "frontend",
          title: "Frontend",
          items: [
            { id: "typescript", title: "TypeScript", link: "/skills/frontend/typescript", iconKey: "BiLogoTypescript", style: { color: '#2f74c0', size: '13px' } },
            { id: "javascript", title: "JavaScript", link: "/skills/frontend/javascript", iconKey: "IoLogoJavascript", style: { color: '#cbcb41', size: '13px' } },
            { id: "react", title: "React", link: "/skills/frontend/react", iconKey: "FaReact", style: { color: '#5ed3f3', size: '13px' } },
            { id: "nextjs", title: "Next.js", link: "/skills/frontend/nextjs", iconKey: "SiNextdotjs", style: { color: '#cccccc', size: '13px' } },
            { id: "tailwindcss", title: "Tailwind CSS", link: "/skills/frontend/tailwindcss", iconKey: "SiTailwindcss", style: { color: '#0bafce', size: '13px' } },
            { id: "html", title: "HTML", link: "/skills/frontend/html", iconKey: "MdCode", style: { color: '#dd7726', size: '13px' } },
            { id: "css", title: "CSS", link: "/skills/frontend/css", iconKey: "FaHashtag", style: { color: '#519aba', size: '13px' } },
            { id: "bootstrap", title: "Bootstrap", link: "/skills/frontend/bootstrap", iconKey: "RiBootstrapLine", style: { color: '#69419a', size: '13px' } },
            { id: "thymeleaf", title: "Thymeleaf", link: "/skills/frontend/thymeleaf", iconKey: "BiLeaf", style: { color: '#005f0f', size: '13px' } },
          ],
        },
        {
          id: "testing",
          title: "Testing & Quality",
          items: [
            { id: "junit", title: "JUnit", link: "/skills/testing/junit", iconKey: "SiJunit5", style: { color: '#25a162', size: '13px' } },
            { id: "playwright", title: "Playwright", link: "/skills/testing/playwright", iconKey: "TbMasksTheater", style: { color: '#2ead33', size: '13px' } },
          ],
        },
        {
          id: "database",
          title: "Database",
          items: [
            { id: "mysql", title: "MySQL", link: "/skills/database/mysql", iconKey: "TbBrandMysql", style: { color: '#4e7d9d', size: '13px' } },
            { id: "mariadb", title: "Maria DB", link: "/skills/database/mariadb", iconKey: "SiMariadb", style: { color: '#be9469', size: '13px' } },
            { id: "mssql", title: "Microsoft SQL", link: "/skills/database/mssql", iconKey: "FaMicrosoft", style: { color: '#0085cf', size: '13px' } },
            { id: "oracle", title: "Oracle", link: "/skills/database/oracle", iconKey: "SiOracle", style: { color: '#e61a23', size: '13px' } },
          ],
        },
        {
          id: "cloudcicd",
          title: "Cloud & CI/CD",
          items: [
            { id: "aws", title: "AWS", link: "/skills/cloudcicd/aws", iconKey: "FaAws", style: { color: '#f68727', size: '13px' } },
            { id: "docker", title: "Docker", link: "/skills/cloudcicd/docker", iconKey: "FaDocker", style: { color: '#2392e6', size: '13px' } },
            { id: "githubactions", title: "GitHub Actions", link: "/skills/cloudcicd/githubactions", iconKey: "SiGithubactions", style: { color: '#2088ff', size: '13px' } },
          ],
        },
        {
          id: "others",
          title: "Others",
          items: [
            { id: "codeversioncontrol", title: "Code Version Control", link: "/skills/others/codeversioncontrol", iconKey: "IoMdGitBranch", style: { color: '#F0DB4F', size: '13px'} },
            { id: "seo", title: "SEO", link: "/skills/others/seo", iconKey: "FaS", style: { color: '#6ca84e', size: '13px'} },
          ],
        },
      ]
    }
  ]
}
