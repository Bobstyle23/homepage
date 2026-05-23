import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type SectionProps = {
  children: React.ReactNode;
  delay?: number;
};

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <MotionBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      mb={6}
    >
      {children}
    </MotionBox>
  );
};

export default Section;
