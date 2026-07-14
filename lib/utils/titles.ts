import experiencesDataMap from "@/data/experiences";
import skillDataMap from "@/data/skills";
import { mainMenus } from "@/data/menu/mainMenu";
import { toTitleCase } from "./text";

export function resolveTabTitle(category: string, tabId: string): string {
  if (category === "experiences" && tabId in experiencesDataMap) {
    return experiencesDataMap[tabId as keyof typeof experiencesDataMap].title;
  }
  if (category === "skills" && tabId in skillDataMap) {
    return skillDataMap[tabId as keyof typeof skillDataMap].title;
  }
  return toTitleCase(tabId);
}

export function resolveSubCategoryTitle(category: string, subCategory: string): string {
  const menu = mainMenus.menus.find((m) => m.id === category);
  const sub = menu?.items?.find((i) => i.id === subCategory);
  return sub?.title ?? toTitleCase(subCategory);
}
