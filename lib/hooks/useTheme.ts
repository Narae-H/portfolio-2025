import { DEFAULT_THEME, THEME_KEY, ThemeType } from "@/models/theme";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  const isLight = theme === "tokyonight-theme";

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeType | null;
    const initialTheme = savedTheme ?? DEFAULT_THEME;

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  function toggleTheme() {
    const newTheme: ThemeType =
      theme === "tokyonight-theme" ? "dark-theme" : "tokyonight-theme";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }

  return {
    theme,
    isLight,
    toggleTheme,
  };
}
