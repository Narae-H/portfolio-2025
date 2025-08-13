import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  [key: string]: string;
}

const initialState: State = {}

const selectedTabSlice = createSlice({
  name: "selectedTab",
  initialState,
  reducers: {
    setSelectedTabAction: (state, action: PayloadAction<{ key: string; tabId: string }>) => {
      state[action.payload.key] = action.payload.tabId? action.payload.tabId: '';
    },
    clearSelectedTabAction: (state, action: PayloadAction<{ key: string }>) => {
      state[action.payload.key] = '';
    }
  }
});

export const { setSelectedTabAction, clearSelectedTabAction } = selectedTabSlice.actions;
export default selectedTabSlice.reducer;