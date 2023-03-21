import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProps } from "next/app";
import "../lib/configs/firebase.config";
import "../lib/local/i18n";
import theme from "../lib/theme/theme";
export const { ToastContainer, toast } = createStandaloneToast();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
