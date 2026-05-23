import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import LogoIcon from "./icons/LogoIcon";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <LogoIcon />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          MukhammadBobur
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
