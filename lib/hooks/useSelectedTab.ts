import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setSelectedTabAction, clearSelectedTabAction } from "@/redux/features/selectedTabReducer";
import { DEFAULT_TAB_ID } from "@/constants/constants";

export default function useSelectedTab(storageKey: string) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTabCategory = useSelector((state: RootState) => state.selectedTab[storageKey]?.category ?? "");
  const selectedTab = useSelector((state: RootState) => state.selectedTab[storageKey]?.tabId ?? DEFAULT_TAB_ID);

  const setSelectedTab = (category: string, tabId: string) => {
    dispatch(setSelectedTabAction({ key: storageKey, category, tabId }));
  };
  
  const clearSelectedTab = () => {
    dispatch(clearSelectedTabAction({ key: storageKey }));
  };

  return {
    selectedTabCategory,
    selectedTab,
    setSelectedTab,
    clearSelectedTab,
  };
}
