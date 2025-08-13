"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addTab as addTabAction, removeTab as removeTabAction, resetTabs as resetTabsAction } from "@/redux/features/visitedTabsReducer";

export default function useVisitedTabs(storageKey: string) {
  const dispatch = useDispatch<AppDispatch>();
  const visitedTabs = useSelector((state: RootState) => state.visitedTabs[storageKey] ?? []);

  const addTab = (tabName: string) => {
    if (!tabName) return;
    if (visitedTabs.includes(tabName)) return;

    dispatch(addTabAction({ key: storageKey, tab: tabName }));
  };

  const closeTab = (tabName: string) => {
    console.log(`tabName=> ${tabName}`);

    if (!tabName) return;
    dispatch(removeTabAction({ key: storageKey, tab: tabName }));
    console.log(visitedTabs);
  };

  const resetTabs = () => {
    dispatch(resetTabsAction({ key: storageKey }));
  };

  return {
    visitedTabs,
    addTab,
    closeTab,
    resetTabs,
  };
}
