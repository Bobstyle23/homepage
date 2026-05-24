import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { ReactNode } from "react";
import Language from "./language";
import { useTranslations } from "next-intl";

interface LinkItemProps {
  href: string;
  path: string;
  children: ReactNode;
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? "glassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
    >
      {children}
    </Link>
  );
};

interface NavbarProps {
  path: string;
}

const Navbar = ({ path, ...props }: NavbarProps) => {
  const t = useTranslations("nav");

  return (
    <Box
      position="fixed"
      as="nav"
      w={"100%"}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={4}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            {t("works")}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t("posts")}
          </LinkItem>
          <Language />
        </Stack>
        <Box flex={1} textAlign={"right"}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>{t("about")}</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem>{t("works")}</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem>{t("posts")}</MenuItem>
                </NextLink>
                <NextLink href="https://github.com/Bobstyle23" passHref>
                  <MenuItem>{t("viewSource")}</MenuItem>
                </NextLink>
                <Box justifySelf={"start"} ml={3} mt={1}>
                  <Language />
                </Box>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
