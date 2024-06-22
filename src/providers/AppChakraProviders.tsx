import { FC, PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

type Props = PropsWithChildren;

const AppChakraProviders: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppChakraProviders;
