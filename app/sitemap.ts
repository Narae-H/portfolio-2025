import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/constants";
import { mainMenus } from "@/data/menu/mainMenu";
import { MenuItem } from "@/models/menu";

function collectLinks(items: MenuItem[], acc: Set<string>) {
  for (const item of items) {
    if (item.link) acc.add(item.link);
    if (item.items) collectLinks(item.items, acc);
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(["/", "/home", "/skills", "/experiences"]);
  collectLinks(mainMenus.menus, paths);

  const lastModified = new Date();

  return Array.from(paths).map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
