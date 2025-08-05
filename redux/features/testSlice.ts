import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO: 테스트용 임시 Slice
const initialState: string = '';

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest(val, action: PayloadAction<string | undefined>) {
      if (action.payload) {
        val = action.payload;
      }
    },
    resetTest(val){
      val = initialState;
    } 
  }
})

export const { setTest, resetTest } = testSlice.actions;
export default testSlice.reducer;