import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import ProductItem from "../ProductItem";
import { DUMMY_DATA } from "./data";

const ProductList: FC = () => {
  return (
    <Box textAlign="center" fontSize="xl" fontWeight="bolder">
      <Heading mb="2rem">Buy Your Favorite Products</Heading>
      {DUMMY_DATA.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </Box>
  );
};

export default ProductList;
