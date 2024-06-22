import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppChakraProviders from "@/providers/AppChakraProviders";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppChakraProviders>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppChakraProviders>
  );
}
