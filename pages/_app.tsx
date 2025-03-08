import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProps } from "next/app";
import router from "next/router";
import { useEffect } from "react";

import dynamic from "next/dynamic";
import "../lib/local/i18n";
import theme from "../lib/theme/theme";
import * as gtag from "../lib/utils/gtag";

const Preloader = dynamic(() => import("../lib/atoms/Preloader/Preloader"), {
  ssr: false,
});

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
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Preloader>
          <Component {...pageProps} />
        </Preloader>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
