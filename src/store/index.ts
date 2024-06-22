import { configureStore } from "@reduxjs/toolkit";
import myCartSlice from "./MyCartStore";
import productSlice from "./Product";
import cartSlice from "./cartSlice";

const rooteReducer = {
  myCart: myCartSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
};

const store = configureStore({
  reducer: rooteReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
