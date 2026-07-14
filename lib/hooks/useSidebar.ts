import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import {
  toggleSidebarAction,
  setSidebarCollapsedAction,
} from "@/redux/features/sidebarReducer";

export default function useSidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);

  const toggleSidebar = () => dispatch(toggleSidebarAction());
  const setCollapsed = (value: boolean) => dispatch(setSidebarCollapsedAction(value));

  return { collapsed, toggleSidebar, setCollapsed };
}
