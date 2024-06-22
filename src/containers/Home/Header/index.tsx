import React, { FC } from "react";
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { myCartAction } from "@/store/MyCartStore";
import { RootState } from "@/store";

const Header: FC = () => {
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch = useDispatch();
  
  const myCartHandler = () => {
    dispatch(myCartAction.isShown());
  };
  return (
    <Box height="4rem" bg="blue.700">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignContent="center"
        position="absolute"
        top="1rem"
        width="100%"
        zIndex="1000"
      >
        <Text fontWeight="bolder" fontSize="xl" color="white">
          ReduxCart
        </Text>
        <Box
          as="button"
          width={{ base: "20%", sm: "15%", md: "10%" }}
          border="1px solid green"
          p="3px 5px"
          borderRadius="xl"
          fontSize={{ base: "12px", sm: "16px" }}
          fontWeight="bold"
          color="green.400"
          onClick={myCartHandler}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          position="static"
        >
          My cart
          <Box
            color="white"
            width={{ base: "10%" }}
            fontSize={{ base: "4px", sm: "10px" }}
            borderRadius="xl"
            padding={{ base: "4px 8px", md: "8px 12px" }}
            bg="black"
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            {cartQuantity}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
