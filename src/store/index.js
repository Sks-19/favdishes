import { configureStore } from "@reduxjs/toolkit";
import selectedSlice from "./selected";

const store = configureStore({
  reducer: {
    selected: selectedSlice.reducer,
  },
});

export default store;
