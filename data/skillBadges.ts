type skillBadgeType = {
  [key: string]:  {
    id: string,
    title: string,
    category: string, 
    color: string, 
    logo:string,
    link?: string
  }
}

export const skillBadges:skillBadgeType = {
  java: { id: "java", title: "Java", category: "Backend", color: "ED8B00", logo: "openjdk", link: "/skills/backend/java" },
  springboot: { id: "springboot", title: "Spring Boot", category: "Backend", color: "6DB33F", logo: "springboot", link: "/skills/backend/springboot" },
  jsp: { id: "jsp", title: "JSP", category: "Backend", color: "DE6C1E", logo: "" },
  html: { id: "html", title: "HTML", category: "Frontend", color: "E34F26", logo: "html5", link: "/skills/frontend/html" },
  css: { id: "css", title: "CSS", category: "Frontend", color: "254BDD", logo: "css", link: "/skills/frontend/css" },
  bootstrap: { id: "bootstrap", title: "Bootstrap", category: "Frontend", color: "7952B3", logo: "bootstrap", link:"/skills/frontend/bootstrap" },
  javascript: { id: "javascript", title: "JavaScript", category: "Frontend", color: "F7DF1E", logo: "javascript", link: "/skills/frontend/javascript" },
  typescript: { id: "typescript", title: "Typescript", category: "Frontend", color: "3178C6", logo: "typescript", link: "/skills/frontend/typescript" },
  jquery: { id: "jquery", title: "jQuery", category: "Frontend", color: "0769AD", logo: "jquery" },
  react: { id: "react", title: "React", category: "Frontend", color: "087EA4", logo: "react", link: "/skills/frontend/react" },
  reduxToolkit: { id: "reduxToolkit", title: "Redux Toolkit", category: "Frontend", color: "764ABC", logo: "redux", link: "/skills/frontend/react" },
  reduxPersist: { id: "reduxPersist", title: "Redux Persist", category: "Frontend", color: "764ABC", logo: "redux", link: "/skills/frontend/react" },
  shopify: { id: "shopify", title: "Shopify", category: "Frontend", color: "7AB55C", logo: "shopify" },
  nextjs: { id: "nextjs", title: "Next.js", category: "Frontend", color: "000000", logo: "nextdotjs", link: "/skills/frontend/react" },
  tailwindcss: { id: "tailwindcss", title: "TailwindCSS", category: "Frontend", color: "00BCFF", logo: "tailwindcss", link: "/skills/frontend/tailwindcss" },
  thymeleaf: { id: "thymeleaf", title: "Thymeleaf", category: "Frontend", color: "005F0F", logo: "thymeleaf", link: "/skills/frontend/thymeleaf" },
  mysql: { id: "mysql", title: "MySQL", category: "Database", color: "4479A1", logo: "mysql", link: "/skills/database/mysql" },
  mariadb: { id: "mariadb", title: "Maria DB", category: "Database", color: "003545", logo: "mariadb", link: "/skills/database/mariadb" },
  azuredb: { id: "azuredb", title: "Azure DB", category: "Database", color: "0078D4", logo: "icloud" , link: "/skills/database/azuredatabase"},
  oracledb: { id: "oracledb", title: "Oracle", category: "Database", color: "E61A23", logo: "" },
  matrixodb: { id: "matrixodb", title: "Matrix ODB", category: "Database", color: "005686", logo: "" },
  graphql: { id: "graphql", title: "GraphQL", category: "Database", color: "E10098", logo: "graphql" },
  aws: { id: "aws", title: "AWS", category: "Cloud", color: "F79400", logo: "icloud", link:"/skills/cloudservices/aws" },
  azure: { id: "azure", title: "Microsoft Azure", category: "Cloud", color: "0078D4", logo: "icloud", link:"/skills/cloudservices/microsoft" },
  docker: { id: "docker", title: "Docker", category: "CI/CD", color: "2496ED", logo: "docker", link:"/skills/others/cicdpipeline" },
  githubActions: { id: "githubActions", title: "GitHub Actions", category: "CI/CD", color: "2088FF", logo: "github-actions", link:"/skills/others/cicdpipeline" },
  awsEcr: { id: "awsEcr", title: "AWS Elastic Container Registr", category: "CI/CD", color: "F79400", logo: "icloud", link: "/skills/cloudservices/aws" },
  awsEb: { id: "awsEB", title: "AWS Elastic Beanstalk", category: "Cloud", color: "F79400", logo: "icloud", link: "/skills/cloudservices/aws" },
  awsLb: { id: "awsLb", title: "AWS Load Balancer", category: "Cloud", color: "F79400", logo: "icloud", link: "/skills/cloudservices/aws" },
  awsRoute53: { id: "awsRoute53", title: "AWS Route53", category: "Cloud", color: "F79400", logo: "icloud", link: "/skills/cloudservices/aws" },
  powerbi: { id: "powerbi", title: "MS Power BI", category: "Others", color: "F7C300", logo: "icloud", link: "/skills/others/mspowerplatform" },
  dax: { id: "dax", title: "DAX", category: "Others", color: "201F1D", logo: "amazon-aws", link: "/skills/others/mspowerplatform" }
};
