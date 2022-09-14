import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import selectedSlice from "./selected";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    selected: selectedSlice.reducer,
  },
});

export default store;
