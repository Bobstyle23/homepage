import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import { ReactNode } from "react";
import { NextRouter } from "next/router";
import dynamic from "next/dynamic";

interface Props {
  children: ReactNode;
  router: NextRouter;
}

const VoxelDog = dynamic(() => import("@/components/voxel-dog"), {
  ssr: false,
});

const Main = ({ children, router }: Props) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MukhammadBobur Pakhriev - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <VoxelDog />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
