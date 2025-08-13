import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  [key: string]: string[]
}

const initialState: State = {}

const visitedTabsSlice = createSlice({
  name: 'visitedTabs',
  initialState,
  reducers: {
    setTabs: (state, action: PayloadAction<{ key: string; tabs: string[] }>) => {
      state[action.payload.key] = action.payload.tabs
    },
    addTab: (state, action: PayloadAction<{ key: string; tab: string }>) => {
      const list = state[action.payload.key] ?? []
      if (!list.includes(action.payload.tab)) {
        state[action.payload.key] = [...list, action.payload.tab]
      }
    },
    removeTab: (state, action: PayloadAction<{ key: string; tab: string }>) => {
      const list = state[action.payload.key] ?? [];
      state[action.payload.key] = list.filter(t => t !== action.payload.tab);
      // state[action.payload.key] = list.filter(t => {
      //   if(t !== action.payload.tab) {
      //     console.log(`t => ${t}`);
      //     console.log(`action.payload.tab=> ${action.payload.tab}`);
      //     return t;
      //   }
      //   // t !== action.payload.tab
      // });
    },
    resetTabs: (state, action: PayloadAction<{ key: string }>) => {
      state[action.payload.key] = []
    },
  },
})

export const { setTabs, addTab, removeTab, resetTabs } = visitedTabsSlice.actions;
export default visitedTabsSlice.reducer;