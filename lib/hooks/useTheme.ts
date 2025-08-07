import { DEFAULT_THEME, THEME_KEY, ThemeType } from "@/models/theme";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);
  const isLight = (theme === 'tokyonight-theme');
  
  useEffect( () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const newTheme: ThemeType = (savedTheme === 'tokyonight-theme')? 'dark-theme' : 'tokyonight-theme';
    
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
  }, []);
  
  function toggleTheme() {
    const newTheme: ThemeType = (theme === 'tokyonight-theme')? 'dark-theme' : 'tokyonight-theme'
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }

  return {
    theme,
    isLight,
    toggleTheme
  }
}