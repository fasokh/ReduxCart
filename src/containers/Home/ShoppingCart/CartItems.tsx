import { FC } from "react";
import { Box, Text, ButtonGroup, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "@/store/cartSlice";

type CartProps = {
  id: string;
  title: string;
  totalPrice: number;
  quantity: number;
  price: number;
};

const CartItems: FC<CartProps> = ({
  id,
  title,
  totalPrice,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(increment({ id, price, title, totalPrice, quantity }));
  };
  const removeHandler = () => {
    dispatch(decrement({ id }));
  };
  return (
    <Box border="none" borderRadius="md" bg="gray" m="1rem 0.5rem">
      <Box display="flex" justifyContent="space-between" p="5px">
        <Text>{title}</Text>
        <Box>${totalPrice}</Box>
      </Box>
      <Box display="flex" justifyContent="space-between" p="5px">
        <Box>X{quantity}</Box>
        <ButtonGroup size="xs">
          <Button onClick={addHandler}>+</Button>
          <Button onClick={removeHandler}>-</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default CartItems;
