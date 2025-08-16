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
          id: "australia",
          title: "Australia",
          items: [
            { id: "portfolio", title: "Portfolio", link: "/experiences/australia/portfolio", iconKey: "IoPerson", style: { color: "#065F46", size: '13px'} },
            { id: "mymusclechefclone", title: "My Muscle Chef Clone", link: "/experiences/australia/mymusclechefclone", iconKey: "GiMuscleUp", style: { color: '#e43900', size: '13px'}},
            { id: "buildcicdpipeline", title: "Build CI/CD Pipeline", link: "/experiences/australia/buildcicdpipeline", iconKey: "FaDocker", style: { color: '#2392E6', size: '13px'}},
            { id: "humanresourcedatabase", title: "Human Resource Database", link: "/experiences/australia/humanresourcedatabase", iconKey: "FaPersonRays", style: { color: '#F0DB4F', size: '13px'} },
            { id: "employeecapacityreport", title: "Employee Capacity Report", link: "/experiences/australia/employeecapacityreport", iconKey: "MdOutlineReduceCapacity", style: { color: '#5ED3F3', size: '13px'} },
            { id: "hhlawyersintranet", title: "H & H Lawyers Intranet", link: "/experiences/australia/hhlawyersintranet", iconKey: "CgBrowser", style: { color: '#115F42', size: '13px'} },
            { id: "oneclicktrademarkwebsite", title: "One Click Trade Mark Website", link: "/experiences/australia/oneclicktrademarkwebsite", iconKey: "GiClick", style: { color: '#0056A3', size: '13px'} },
            { id: "financeoverviewdashboard", title: "Finance Overview Dashboard", link: "/experiences/australia/financeoverviewdashboard", iconKey: "FaMoneyBills", style: { color: '#F76C0D', size: '13px'} },
            { id: "individualperformancedashboard", title: "Individual Performance Dashboard", link: "/experiences/australia/individualperformancedashboard", iconKey: "FaPersonWalking", style: { color: '#69419A', size: '13px'} },
            { id: "hhlawyerswebmigration", title: "H & H Lawyers Website and Server Migration", link: "/experiences/australia/hhlawyerswebmigration", iconKey: "FaBalanceScaleLeft", style: { color: '#115f42', size: '13px'} },
          ],
        },
        {
          id: "korea",
          title: "Korea",
          items: [
            { id: "stmsmanagement", title: "STMS Management", link: "/experiences/korea/stmsmanagement", iconKey: "TbCircleLetterSFilled", style: { color: '#008AFF', size: '13px'} },
            { id: "productlifecyclmanagement", title: "Product Lifecycle Management", link: "/experiences/korea/productlifecyclmanagement", iconKey: "GiCycle", style: { color: '#e43900', size: '13px'} },
            { id: "trafficinformationsystem", title: "Traffic Information System", link: "/experiences/korea/trafficinformationsystem", iconKey: "PiTrafficSignalFill", style: { color: '#4e7d9d', size: '13px'} },
            { id: "mpis", title: "Manual Information System", link: "/experiences/korea/mpis", iconKey: "FaCar", style: { color: '#F0DB4F', size: '13px'} },
            { id: "poc", title: "Proof of Concept", link: "/experiences/korea/poc", iconKey: "TbCircleLetterPFilled", style: { color: '#4E7D9D', size: '13px'} },
            { id: "mpasys", title: "Mobis Patent System", link: "/experiences/korea/mpasys", iconKey: "FaStamp", style: { color: '#4E7D9D', size: '13px'} },
            { id: "systemmanagement", title: "System Management", link: "/experiences/korea/systemmanagement", iconKey: "MdOutlineManageHistory", style: { color: '#be9469', size: '13px'} },
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
          id: "backend",
          title: "Backend",
          items: [
            { id: "java", title: "Java", link: "/skills/backend/java", iconKey: "FaJ", style: { color: '#cc3e44', size: '13px' } },
            { id: "springboot", title: "Spring Boot", link: "/skills/backend/springboot", iconKey:"SiSpringboot", style: { color: '#6ca84e', size: '13px' } },
          ],
        },
        {
          id: "frontend",
          title: "Frontend",
          items: [
            { id: "react", title: "React", link: "/skills/frontend/react", iconKey: "FaReact", style: { color: '#5ed3f3', size: '13px' }  },
            { id: "javascript", title: "JavaScript", link: "/skills/frontend/javascript", iconKey: "IoLogoJavascript", style: { color: '#cbcb41', size: '13px' }  },
            { id: "typescript", title: "TypeScript", link: "/skills/frontend/typescript", iconKey: "BiLogoTypescript", style: { color: '2F74C0', size: '13px' }  },
            { id: "tailwindcss", title: "Tailwind CSS", link: "/skills/frontend/tailwindcss", iconKey: "SiTailwindcss", style: { color: '#0BAFCE', size: '13px' }  },
            { id: "bootstrap", title: "BootStrap", link: "/skills/frontend/bootstrap", iconKey: "RiBootstrapLine", style: { color: '#69419a', size: '13px' }  },
            { id: "css", title: "CSS", link: "/skills/frontend/css", iconKey: "FaHashtag", style: { color: '#519aba', size: '13px' }  },
            { id: "html", title: "HTML", link: "/skills/frontend/html", iconKey: "MdCode", style: { color: '#dd7726', size: '13px' }  },
            { id: "thymeleaf", title: "Thymeleaf", link: "/skills/frontend/thymeleaf", iconKey: "BiLeaf", style: { color: '#005f0f', size: '13px' }  },
          ],
          },
          {
            id: "database",
            title: "Database",
            items: [
              { id: "mysql", title: "MySQL", link: "/skills/database/mysql", iconKey: "TbBrandMysql", style: { color: '#4e7d9d', size: '13px'} },
              { id: "mariadb", title: "Maria DB", link: "/skills/database/mariadb", iconKey: "SiMariadb", style: { color: '#be9469', size: '13px' } },
              { id: "azuredatabase", title: "Azure DB", link: "/skills/database/azuredatabase", iconKey: "ImOnedrive", style: { color: '#0085cf', size: '13px' } },
            ],
          },
          {
            id: "cloudservices",
            title: "Cloud Services",
            items: [
              { id: "aws", title: "AWS", link: "/skills/cloudservices/aws", iconKey: "FaAws", style: { color: '#f68727', size: '13px'} },
              { id: "microsoft", title: "Microsoft", link: "/skills/cloudservices/microsoft", iconKey: "VscAzure", style: { color: '#0085cf', size: '13px'} },
            ],
          },
          {
            id: "others",
            title: "Others",
            items: [
              { id: "codeversioncontrol", title: "Code Version Control", link: "/skills/others/codeversioncontrol", iconKey: "IoMdGitBranch", style: { color: '#F0DB4F', size: '13px'} },
              { id: "cicdpipeline", title: "CI/CD Pipeline", link: "/skills/others/cicdpipeline", iconKey: "FaDocker", style: { color: '#1D63ED', size: '13px'} },
              { id: "seo", title: "SEO", link: "/skills/others/seo", iconKey: "FaS", style: { color: '#6ca84e', size: '13px'} },
              { id: "mspowerplatform", title: "MS Power Platform", link: "/skills/others/mspowerplatform", iconKey: "FaMicrosoft", style: { color: '#F72F00', size: '13px'} },
            ],
          },
        ]
      }
    ]
  }

