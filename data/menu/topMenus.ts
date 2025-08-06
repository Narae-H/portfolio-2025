type Menu = {
  name: string,
  tooltip: string
}

type TopMenu = {
  _comment: string,
  menus: Menu[]
}

export const topMenus: TopMenu = {
  "_comment" : "name: used for a link, tooltip: used for a tooltip",
  "menus": [
    {
      "name": "File",
      "tooltip" : "File"
    },
    {
      "name": "Edit",
      "tooltip" : "Edit"
    },
    {
      "name": "Selection",
      "tooltip" : "Selection"
    },
    {
      "name": "View",
      "tooltip" : "View"
    },
    {
      "name": "Go",
      "tooltip" : "Go"
    },
    {
      "name": "Run",
      "tooltip" : "Run"
    },
    {
      "name": "Terminal",
      "tooltip" : "Terminal"
    },
    {
      "name": "Help",
      "tooltip" : "Help"
    }
  ]
}
