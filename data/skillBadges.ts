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
  // AI-native engineering
  claudecode: { id: "claudecode", title: "Claude Code", category: "AI", color: "D97757", logo: "anthropic", link: "/skills/ai/ainativeengineering" },
  claudeApi: { id: "claudeApi", title: "Claude API", category: "AI", color: "D97757", logo: "anthropic", link: "/skills/ai/ainativeengineering" },
  cursor: { id: "cursor", title: "Cursor", category: "AI", color: "000000", logo: "cursor", link: "/skills/ai/ainativeengineering" },
  mcp: { id: "mcp", title: "MCP", category: "AI", color: "000000", logo: "modelcontextprotocol", link: "/skills/ai/ainativeengineering" },

  // Backend
  java: { id: "java", title: "Java", category: "Backend", color: "ED8B00", logo: "openjdk", link: "/skills/backend/java" },
  springboot: { id: "springboot", title: "Spring Boot", category: "Backend", color: "6DB33F", logo: "springboot", link: "/skills/backend/springboot" },
  gradle: { id: "gradle", title: "Gradle", category: "Backend", color: "02303A", logo: "gradle", link: "/skills/backend/springboot" },
  querydsl: { id: "querydsl", title: "QueryDSL", category: "Backend", color: "0769AD", logo: "", link: "/skills/backend/springboot" },
  springdoc: { id: "springdoc", title: "Swagger / OpenAPI", category: "Backend", color: "85EA2D", logo: "swagger", link: "/skills/backend/springboot" },
  jsp: { id: "jsp", title: "JSP", category: "Backend", color: "DE6C1E", logo: "" },

  // Frontend
  html: { id: "html", title: "HTML", category: "Frontend", color: "E34F26", logo: "html5", link: "/skills/frontend/html" },
  css: { id: "css", title: "CSS", category: "Frontend", color: "254BDD", logo: "css", link: "/skills/frontend/css" },
  bootstrap: { id: "bootstrap", title: "Bootstrap", category: "Frontend", color: "7952B3", logo: "bootstrap", link:"/skills/frontend/bootstrap" },
  javascript: { id: "javascript", title: "JavaScript", category: "Frontend", color: "F7DF1E", logo: "javascript", link: "/skills/frontend/javascript" },
  typescript: { id: "typescript", title: "TypeScript", category: "Frontend", color: "3178C6", logo: "typescript", link: "/skills/frontend/typescript" },
  jquery: { id: "jquery", title: "jQuery", category: "Frontend", color: "0769AD", logo: "jquery" },
  react: { id: "react", title: "React", category: "Frontend", color: "087EA4", logo: "react", link: "/skills/frontend/react" },
  reduxToolkit: { id: "reduxToolkit", title: "Redux Toolkit", category: "Frontend", color: "764ABC", logo: "redux", link: "/skills/frontend/react" },
  reduxPersist: { id: "reduxPersist", title: "Redux Persist", category: "Frontend", color: "764ABC", logo: "redux", link: "/skills/frontend/react" },
  shopify: { id: "shopify", title: "Shopify", category: "Frontend", color: "7AB55C", logo: "shopify" },
  nextjs: { id: "nextjs", title: "Next.js", category: "Frontend", color: "000000", logo: "nextdotjs", link: "/skills/frontend/nextjs" },
  nextintl: { id: "nextintl", title: "next-intl (i18n)", category: "Frontend", color: "000000", logo: "i18next", link: "/skills/frontend/nextjs" },
  tailwindcss: { id: "tailwindcss", title: "TailwindCSS", category: "Frontend", color: "00BCFF", logo: "tailwindcss", link: "/skills/frontend/tailwindcss" },
  thymeleaf: { id: "thymeleaf", title: "Thymeleaf", category: "Frontend", color: "005F0F", logo: "thymeleaf", link: "/skills/frontend/thymeleaf" },

  // Testing & quality
  junit: { id: "junit", title: "JUnit", category: "Testing", color: "25A162", logo: "junit5", link: "/skills/testing/junit" },
  playwright: { id: "playwright", title: "Playwright", category: "Testing", color: "2EAD33", logo: "playwright", link: "/skills/testing/playwright" },

  // Database
  mysql: { id: "mysql", title: "MySQL", category: "Database", color: "4479A1", logo: "mysql", link: "/skills/database/mysql" },
  mariadb: { id: "mariadb", title: "Maria DB", category: "Database", color: "003545", logo: "mariadb", link: "/skills/database/mariadb" },
  mssql: { id: "mssql", title: "Microsoft SQL", category: "Database", color: "CC2927", logo: "microsoftsqlserver", link: "/skills/database/mssql" },
  azuredb: { id: "azuredb", title: "Azure SQL", category: "Database", color: "0078D4", logo: "microsoftazure", link: "/skills/database/mssql" },
  oracledb: { id: "oracledb", title: "Oracle", category: "Database", color: "F80000", logo: "oracle", link: "/skills/database/oracle" },
  matrixodb: { id: "matrixodb", title: "Matrix ODB", category: "Database", color: "005686", logo: "" },
  supabase: { id: "supabase", title: "Supabase", category: "Database", color: "3FCF8E", logo: "supabase" },
  graphql: { id: "graphql", title: "GraphQL", category: "Database", color: "E10098", logo: "graphql" },

  // Cloud & CI/CD
  aws: { id: "aws", title: "AWS", category: "Cloud", color: "F79400", logo: "amazonwebservices", link:"/skills/cloudcicd/aws" },
  awsEcs: { id: "awsEcs", title: "AWS ECS Fargate", category: "Cloud", color: "F79400", logo: "amazonecs", link: "/skills/cloudcicd/aws" },
  awsEcr: { id: "awsEcr", title: "AWS ECR", category: "Cloud", color: "F79400", logo: "amazonecs", link: "/skills/cloudcicd/aws" },
  awsRds: { id: "awsRds", title: "AWS RDS", category: "Cloud", color: "527FFF", logo: "amazonrds", link: "/skills/cloudcicd/aws" },
  awsS3: { id: "awsS3", title: "AWS S3", category: "Cloud", color: "569A31", logo: "amazons3", link: "/skills/cloudcicd/aws" },
  awsCognito: { id: "awsCognito", title: "AWS Cognito", category: "Cloud", color: "DD344C", logo: "amazoncognito", link: "/skills/cloudcicd/aws" },
  awsSecretsManager: { id: "awsSecretsManager", title: "AWS Secrets Manager", category: "Cloud", color: "DD344C", logo: "amazonwebservices", link: "/skills/cloudcicd/aws" },
  awsCloudfront: { id: "awsCloudfront", title: "AWS CloudFront", category: "Cloud", color: "8C4FFF", logo: "amazonwebservices", link: "/skills/cloudcicd/aws" },
  awsEb: { id: "awsEb", title: "AWS Elastic Beanstalk", category: "Cloud", color: "F79400", logo: "amazonwebservices", link: "/skills/cloudcicd/aws" },
  awsLb: { id: "awsLb", title: "AWS ALB", category: "Cloud", color: "8C4FFF", logo: "amazonwebservices", link: "/skills/cloudcicd/aws" },
  awsRoute53: { id: "awsRoute53", title: "AWS Route 53", category: "Cloud", color: "8C4FFF", logo: "amazonroute53", link: "/skills/cloudcicd/aws" },
  docker: { id: "docker", title: "Docker", category: "Cloud", color: "2496ED", logo: "docker", link:"/skills/cloudcicd/docker" },
  githubActions: { id: "githubActions", title: "GitHub Actions", category: "Cloud", color: "2088FF", logo: "githubactions", link:"/skills/cloudcicd/githubactions" },
  azure: { id: "azure", title: "Microsoft Azure", category: "Cloud", color: "0078D4", logo: "microsoftazure" },

  // Others
  powerbi: { id: "powerbi", title: "MS Power BI", category: "Others", color: "F2C811", logo: "powerbi" },
  dax: { id: "dax", title: "DAX", category: "Others", color: "201F1D", logo: "" }
};
