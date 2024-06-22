import { Box } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import Header from "./Header";
import ProductList from "./Product";
import ShoppingCart from "./ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";
import { sendCartData, getCartItems } from "@/store/cartActions";

const Home: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.item);
  const showCartShopping = useSelector(
    (state: RootState) => state.myCart.toggled
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  useEffect(() => {
    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <Box minHeight="100vh" bg="gray.700">
      <Header />
      {showCartShopping && <ShoppingCart />}
      <ProductList />
    </Box>
  );
};

export default Home;
