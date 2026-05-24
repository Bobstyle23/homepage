import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Head from "next/head";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextIntlClientProvider
        locale={pageProps.locale}
        messages={pageProps.messages}
      >
        <Head>
          <title>bs23</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </NextIntlClientProvider>
    </ChakraProvider>
  );
};

export default Website;
