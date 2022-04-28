import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testType: 1,
};

export const testTypeSlice = createSlice({
  name: "testType",
  initialState,
  reducers: {
    changeTestType: (state, action) => {
      state.testType = action.payload;
    },
  },
});

export const { changeTestType } = testTypeSlice.actions;
export default testTypeSlice.reducer;
