import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, title }: Props) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - MukhammadBobur Pakhriev</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
);

export default Layout;
