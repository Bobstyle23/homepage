import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { now } from "@/data/now";

const currently = Object.values(now).filter((item) => item.value);

const NowSection = () => {
  const cardBg = useColorModeValue("whiteAlpha.700", "whiteAlpha.100");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Box mt={12}>
      <Heading as="h3" variant="section-title">
        Now
      </Heading>

      <Text fontSize="sm" opacity={0.75} mb={4}>
        A tiny snapshot of what I&apos;m up to these days.
      </Text>

      <SimpleGrid columns={[1, 2]} gap={4}>
        {currently.map((item) => (
          <Box
            key={item.label}
            p={4}
            border="1px solid"
            borderColor={border}
            borderRadius="xl"
            bg={cardBg}
          >
            <Text fontSize="sm" fontWeight="bold" mb={1}>
              {item.label}
            </Text>

            <Text fontSize="sm" opacity={0.8}>
              {item.value}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default NowSection;
