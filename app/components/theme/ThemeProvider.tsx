'use client';

import { DEFAULT_THEME, THEME_KEY, ThemeType } from "@/models/theme";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type ThemeContextValue = {
  theme: ThemeType;
  isLight: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  // Sync React state with the theme the pre-hydration script already applied to <html>.
  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as ThemeType | null) ?? DEFAULT_THEME;
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemeType =
        prev === "tokyonight-theme" ? "dark-theme" : "tokyonight-theme";

      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, isLight: theme === "tokyonight-theme", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
