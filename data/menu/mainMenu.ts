export type Item = {
  name: string;
  important?: boolean,
  items?: Item[]
}

export type Menu = {
  name: string,
  tooltip: string,
  icon?: string,
  items?: Item[]
}

export type MainMenu = {
  _comment: string,
  menus: Menu[]
}

export const mainMenus: MainMenu = {
  "_comment" : "name: Used for a link and title, link: Converts the name to lowercase and replaces spaces with '-'",
  "menus": [
    {
      "name": "Home",
      "tooltip" : "Home",
      "icon": "VscFiles"
    },
    {
      "name": "Skills",
      "tooltip" : "Skills",
      "icon": "VscCode",
      "items": [
          {
            "name": "Backend",
            "important" : true,
            "items": [
              { "name": "Java" },
              { "name": "Spring Boot" }
            ]
          },
          {
            "name": "Frontend",
            "important" : true,
            "items": [
              { "name": "HTML" },
              { "name": "CSS" },
              { "name": "JavaScript" },
              { "name": "React" },
              { "name": "BootStrap" },
              { "name": "Thymeleaf" }
            ]
          },
          {
            "name": "Database",
            "items": [
              { "name": "MySQL" },
              { "name": "Maria DB" },
              { "name": "Azure DB" }
            ]
          },
          {
            "name": "Cloud Services",
            "items": [
              { "name": "AWS" },
              { "name": "Microsoft" }
            ]
          },
          {
            "name": "Others",
            "items": [
              { "name": "Code Version Control" },
              { "name": "SEO" },
              { "name": "MS Office App" },
              { "name": "MS Power Platform" }
            ]
          }
        ]
      },
      {
        "name": "Experiences",
        "tooltip" : "Experiences",
        "icon": "VscFolderLibrary",
        "items": [
          {
            "name": "Australia",
            "items": [
              { "name": "Build CI/CD Pipeline" },
              { "name": "Portfolio" },
              { "name": "Human Resource Database" },
              { "name": "Server Migration" },
              { "name": "Employee Capacity Report" },
              { "name": "H & H Lawyers Intranet" },
              { "name": "One Click Trade Mark Website" },
              { "name": "Finance Overview Dashboard" },
              { "name": "Individual Performance Dashboard" },
              { "name": "H & H Lawyers Website and Server Migration" }
            ]
          },
          {
            "name": "Korea",
            "items": [
              { "name": "STMS Management" },
              { "name": "Project Lifecycle Management" },
              { "name": "Traffic Information System" },
              { "name": "MPIS" },
              { "name": "MPASIS" },
              { "name": "POC" },
              { "name": "System Management" }
            ]
          }
      ]
    }
  ]
}

