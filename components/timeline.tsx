import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  useColorModeValue,
} from "@chakra-ui/react";
import { timeline } from "@/data/timeline";

const Timeline = () => {
  const dividerBg = useColorModeValue("whiteAlpha.700", "whiteAlpha.300");
  return (
    <Box mt={12}>
      <Heading as="h3" variant="section-title">
        Timeline
      </Heading>

      <VStack align="stretch" spacing={6} mt={6}>
        {timeline.map((item) => (
          <HStack key={item.year} align="flex-start" spacing={4}>
            <VStack spacing={0}>
              <Circle size="12px" bg="teal.400" mt={2} />
              <Box w="1px" h="72px" bg={dividerBg} />
            </VStack>
            <Box>
              <Text fontSize="sm" opacity={0.7}>
                {item.year}
              </Text>

              <Text fontWeight="bold" fontSize="lg">
                {item.title}
              </Text>

              <Text fontSize="sm" opacity={0.8}>
                {item.description}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Timeline;
