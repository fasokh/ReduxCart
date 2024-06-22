import axios from "axios";
import {Dispatch} from 'redux'

type CartItem = {
  id: string; // Use string for id to match backend
  title: string;
  price: number;
  totalPrice: number;
  quantity: number;
};

type CartData = { cartItems: CartItem[] };

export const sendCartData = (cartItems: CartData) => {
  return async (dispatch: Dispatch) => {
    const updateCartItems = async () => {
      for (const item of cartItems) {
        try {
          const response = await axios.put(
            `http://localhost:9000/cart/${item.id}`,
            item
          );
          console.log(
            `Cart item ${item.id} updated successfully:`,
            response.data
          );
        } catch (error) {
          console.error(`Error updating cart item ${item.id}:`, error);
        }
      }
    };
    await updateCartItems();
  };
};

export const getCartItems = () => {
  return async (dispatch: Dispatch) => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/cart/");
        return response.data;
      } catch (err) {
        console.log(err);
      }
    };
    await getData();
  };
};
