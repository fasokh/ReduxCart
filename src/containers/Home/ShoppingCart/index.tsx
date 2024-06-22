import { Box, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";

import CartItems from "./CartItems";

const ShoppingCart: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.item);

  return (
    <Box
      width="40%"
      height="9rem"
      bg="black"
      color="white"
      border="none"
      borderRadius="md"
      m="4rem auto"
    >
      <Heading size="0.75rem" pl="0.5rem" pt="1rem">
        Your Shopping Cart
      </Heading>
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          title={item.title}
          totalPrice={item.totalPrice}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </Box>
  );
};

export default ShoppingCart;
