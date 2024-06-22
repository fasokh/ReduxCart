import { createSlice } from "@reduxjs/toolkit";

export const initialMyCartState = { toggled: false };

const myCartSlice = createSlice({
  name: "myCart",
  initialState: initialMyCartState,
  reducers: {
    isShown(state) {
      state.toggled = !state.toggled;
    },
  },
});

export const myCartAction = myCartSlice.actions;

export default myCartSlice;
