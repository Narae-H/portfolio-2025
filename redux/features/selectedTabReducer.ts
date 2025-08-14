import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TabInfo = {
  tabId: string;
  category: string;
};

type State = {
  [key: string]: TabInfo;
}

const initialState: State = {}

const selectedTabSlice = createSlice({
  name: "selectedTab",
  initialState,
  reducers: {
    setSelectedTabAction: (state, action: PayloadAction<{ key: string; category: string, tabId: string }>) => {
      state[action.payload.key] = {
        tabId: action.payload.tabId?? '',
        category: action.payload.category?? ''
      };
    },
    clearSelectedTabAction: (state, action: PayloadAction<{ key: string }>) => {
      state[action.payload.key] = {
        tabId: '',
        category: ''
      };
    }
  }
});

export const { setSelectedTabAction, clearSelectedTabAction } = selectedTabSlice.actions;
export default selectedTabSlice.reducer;