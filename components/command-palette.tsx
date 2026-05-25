import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Kbd, Text, useColorModeValue } from "@chakra-ui/react";
import { Command } from "cmdk";

const CommandPalette = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const bg = useColorModeValue("white", "#202023");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((value) => !value);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={9999}
      bg="blackAlpha.600"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      pt="20vh"
      px={4}
      onClick={() => setOpen(false)}
    >
      <Box
        w="full"
        maxW="560px"
        bg={bg}
        border="1px solid"
        borderColor={border}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command>
          <Box px={4} py={3} borderBottom="1px solid" borderColor={border}>
            <Command.Input
              autoFocus
              placeholder="Type a command or search..."
              style={{
                width: "100%",
                outline: "none",
                background: "transparent",
                fontSize: "16px",
              }}
            />
          </Box>

          <Command.List style={{ padding: "20px" }}>
            <Command.Empty>
              <Box px={4} py={6}>
                <Text opacity={0.7}>No results found.</Text>
              </Box>
            </Command.Empty>

            <Command.Group heading="Navigation">
              <Command.Item onSelect={() => goTo("/")}>About</Command.Item>
              <Command.Item onSelect={() => goTo("/works")}>Works</Command.Item>
              <Command.Item onSelect={() => goTo("/posts")}>Posts</Command.Item>
            </Command.Group>

            <Command.Group heading="External">
              <Command.Item
                onSelect={() =>
                  window.open("https://github.com/Bobstyle23", "_blank")
                }
              >
                GitHub
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>

        <Box px={4} py={3} borderTop="1px solid" borderColor={border}>
          <Text fontSize="xs" opacity={0.65}>
            Press <Kbd>Esc</Kbd> to close
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CommandPalette;
