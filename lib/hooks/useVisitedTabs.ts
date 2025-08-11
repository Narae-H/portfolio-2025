"use client";

import { useState, useEffect, useCallback } from "react";

export type VisitedTabs = string[];
export const STORAGE_KEY_SKILLS = "visited_skills";
export const STORAGE_KEY_EXPERIENCE = "visited_experience";

export default function useVisitedTabs( storageKey: string ) {
  const [visitedTabs, setVisitedTabs] = useState<VisitedTabs>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setVisitedTabs(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load visited menus", e);
    }
  }, []);

  const saveTabs = useCallback((newMenus: VisitedTabs) => {
    setVisitedTabs(newMenus);
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(newMenus));
    }
  }, []);

  const addTab = useCallback(
    (tabName: string) => {
      if (!tabName) return;

      setVisitedTabs((prev) => {
        if (prev.includes(tabName)) return prev;
        const updated = [...prev, tabName];
        localStorage.setItem(storageKey, JSON.stringify(updated));
        return updated;
      });
    },
    [storageKey]
  );

  return {
    visitedTabs,
    addTab,
    resetTabs: () => saveTabs([]),
  };
}