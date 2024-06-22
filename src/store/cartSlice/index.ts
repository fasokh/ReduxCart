import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string; // Use string for id to match backend
  title: string;
  price: number;
  totalPrice: number;
  quantity: number;
};

type CartState = {
  item: CartItem[];
  totalQuantity: number;
};

const initialCartState: CartState = {
  item: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increment(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.item.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.item.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    decrement(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const existingItem = state.item.find(item => item.id === id);
      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.item = state.item.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.item = action.payload;
      state.totalQuantity = action.payload.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { increment, decrement, setCartItems } = cartSlice.actions;
export default cartSlice;
