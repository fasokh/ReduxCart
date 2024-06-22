import { Box, Button, Text, Input, List, ListItem } from "@chakra-ui/react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { increment } from "@/store/cartSlice";

type ProductItemProps = {
  id: string;
  title: string;
  price: number;
  description: string;
  // quantity: number;
  // totalPrice: number
};

const ProductItem: FC<ProductItemProps> = ({
  id,
  title,
  price,
  description,
  // quantity,
  // totalPrice
}) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(increment({ id, price, title }));
  };

  return (
    <Box
      border="none"
      borderRadius="xl"
      bg="black"
      width="55%"
      height="10rem"
      m="2rem auto"
    >
      <Box
        display="flex"
        position="relative"
        top="1rem"
        justifyContent="space-between"
        m="0.5rem"
      >
        <Text color="white">{title}</Text>
        <Box
          border="none"
          borderRadius="xl"
          bg="gray"
          color="white"
          width="2rem"
        >
          ${price}
        </Box>
      </Box>
      <Text color="white" pt="1rem" pl="0.5rem" textAlign="left">
        {description}
      </Text>
      <Button
        colorScheme="blue"
        variant="outline"
        m="1rem"
        position="relative"
        float="right"
        onClick={addToCartHandler}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductItem;
