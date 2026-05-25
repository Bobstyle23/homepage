import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Head from "next/head";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "../messages/en.json";
import CommandPalette from "@/components/command-palette";

const Website = ({ Component, pageProps, router }: AppProps) => {
  const locale = pageProps.locale ?? router.locale ?? "en";
  const messages = pageProps.messages ?? enMessages;
  return (
    <ChakraProvider theme={theme}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Head>
          <title>bs23</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <Fonts />
        <CommandPalette />
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
