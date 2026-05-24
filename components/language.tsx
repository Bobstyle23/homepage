import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const languages = [
  { code: "en", label: "English", short: "EN", flag: "🇺🇸" },
  { code: "ru", label: "Русский", short: "RU", flag: "🇷🇺" },
  { code: "uz", label: "O‘zbek", short: "UZ", flag: "🇺🇿" },
  { code: "ko", label: "한국어", short: "KR", flag: "🇰🇷" },
];

const Language = () => {
  const router = useRouter();

  const current =
    languages.find((lang) => lang.code === router.locale) ?? languages[0];

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  const bg = useColorModeValue("whiteAlpha.700", "whiteAlpha.100");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        rounded="sm"
        bg={bg}
        border="1px solid"
        borderColor={border}
        backdropFilter="blur(10px)"
        rightIcon={<ChevronDownIcon />}
        px={3}
        _hover={{ transform: "translateY(-1px)" }}
        _active={{ transform: "translateY(0)" }}
      >
        <HStack spacing={2}>
          <Text>{current.flag}</Text>
          <Text fontSize="xs" fontWeight="700">
            {current.short}
          </Text>
        </HStack>
      </MenuButton>

      <MenuList
        minW="150px"
        rounded="xl"
        p={1}
        border="1px solid"
        borderColor={border}
        bg={useColorModeValue("white", "#202023")}
        boxShadow="xl"
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            rounded="lg"
            fontSize="sm"
            fontWeight={router.locale === lang.code ? "700" : "500"}
            bg={router.locale === lang.code ? "blackAlpha.200" : "transparent"}
            onClick={() => changeLanguage(lang.code)}
          >
            <HStack spacing={3}>
              <Text>{lang.flag}</Text>
              <Text>{lang.label}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Language;
