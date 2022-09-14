import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import resultSlice from "./result";
import selectedSlice from "./selected";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    result: resultSlice.reducer,
    selected: selectedSlice.reducer,
  },
});

export default store;
