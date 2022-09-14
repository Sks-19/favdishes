import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: { isResult: false },
  reducers: {
    result(state) {
      state.isResult = true;
    },
    home(state) {
      state.isResult = false;
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice;
