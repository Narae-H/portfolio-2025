import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  collapsed: boolean;
};

const initialState: State = {
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebarAction: (state) => {
      state.collapsed = !state.collapsed;
    },
    setSidebarCollapsedAction: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleSidebarAction, setSidebarCollapsedAction } = sidebarSlice.actions;
export default sidebarSlice.reducer;
