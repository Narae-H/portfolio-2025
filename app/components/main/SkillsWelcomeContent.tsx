import List from "@/app/components/common/List";
import { mainMenus } from "@/data/menu/mainMenu";
import { EmptyMenuItemValue, MenuItem } from "@/models/menu";

export default function SkillsWelcomeContent() {

  const selectedMenu = mainMenus.menus.find(
    (menu) => menu.title.toLowerCase() === "skills"
  );
  const menus: MenuItem[] = selectedMenu?.items ?? [EmptyMenuItemValue];

  return (
    <div className="flex flex-1 justify-center items-start md:items-center w-full p-4 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto p-4">
        {menus.map((menu) => (
          <List
            key={menu.id}
            title={menu.title}
            listItems={menu.items}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}