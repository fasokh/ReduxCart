import { createSlice } from "@reduxjs/toolkit";

const initailProductState = { count: 0 };

const productSlice = createSlice({
  name: "product",
  initialState: initailProductState,
  reducers: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      if (state.count <= 0) {
        return;
      }
      state.count--;
    },
  },
});

export const productAction = productSlice.actions;

export default productSlice;
