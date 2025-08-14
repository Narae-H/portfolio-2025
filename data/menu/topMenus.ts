import { MenuItem } from "@/models/menu"

type TopMenu = {
  _comment: string,
  menus: MenuItem[]
}

export const topMenus: TopMenu = {
  "_comment" : "name: used for a link, tooltip: used for a tooltip",
  "menus": [
    {
      "id": "file",
      "title": "File",
      "tooltip" : "File"
    },
    {
      "id": "edit",
      "title": "Edit",
      "tooltip" : "Edit"
    },
    {
      "id": "selection",
      "title": "Selection",
      "tooltip" : "Selection"
    },
    {
      "id": "view",
      "title": "View",
      "tooltip" : "View"
    },
    {
      "id": "go",
      "title": "Go",
      "tooltip" : "Go"
    },
    {
      "id": "run",
      "title": "Run",
      "tooltip" : "Run"
    },
    {
      "id": "terminal",
      "title": "Terminal",
      "tooltip" : "Terminal"
    },
    {
      "id": "help",
      "title": "Help",
      "tooltip" : "Help"
    }
  ]
}
