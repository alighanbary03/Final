import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalslice";
const store = configureStore({
  reducer: { ui: modalSlice.reducer },
});
export default store;
