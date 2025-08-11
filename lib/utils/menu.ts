import { MenuItem } from "@/models/menu";

/**
 * Recursively find MenuItem by id
 */
export function findMenuItemById(menuList: MenuItem[], idToFind: string): MenuItem | undefined {
  for (const menu of menuList) {
    if (menu.id === idToFind) return menu;
    if (menu.items) {
      const found = findMenuItemById(menu.items, idToFind);
      if (found) return found;
    }
  }
  return undefined;
}
