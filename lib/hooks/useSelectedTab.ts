import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setSelectedTabAction, clearSelectedTabAction } from "@/redux/features/selectedTabReducer";

export default function useSelectedTab(storageKey: string) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTab = useSelector((state: RootState) => state.selectedTab[storageKey] ?? "");

  const setSelectedTab = (tabId: string) => {
    console.log(`storageKey = >${storageKey}`);
    console.log(`tabId = >${tabId}`);
    dispatch(setSelectedTabAction({ key: storageKey, tabId }));
  };

  const clearSelectedTab = () => {
    dispatch(clearSelectedTabAction({ key: storageKey }));
  };

  return {
    selectedTab,
    setSelectedTab,
    clearSelectedTab,
  };
}
