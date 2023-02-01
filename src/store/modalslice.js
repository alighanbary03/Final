import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    menu: { show: false, id: null },
  },
  reducers: {
    showMenu(state, action) {
      state.menu = {
        show: true,
        id: action.payload,
      };
    },
    hideMenu(state, action) {
      state.menu = {
        show: false,
        id: null,
      };
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice;
