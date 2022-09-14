import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: "selected",
  initialState: {
    selectedIds: [],
  },
  reducers: {
    addSelected(state, action) {
      state.selectedIds.push(action.payload);
    },
  },
});

export const selActions = selectedSlice.actions;

export default selectedSlice;
