import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Link,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a front-end engineer based in Uzbekistan!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant={"page-title"}>
              MukhammadBobur
            </Heading>
            <Text>Digital Nomad (Developer / Father / Enthusiast)</Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign={"center"}
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              maxWidth={"100px"}
              display="inline-block"
              src="/images/bob.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as={"h3"} variant={"section-title"}>
            Work
          </Heading>
          <Paragraph>
            MukhammadBobur is a digital nomad navigating life through code,
            creativity, and curiosity, building modern frontend experiences
            while exploring new places, embracing fatherhood, and constantly
            chasing ideas that inspire growth both professionally and
            personally.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href={"/works"}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as={"h3"} variant={"section-title"}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Namangan (Aksikent), Uzbekistan
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Bachelor&apos;s Program in the Computer Science and
            Engineering school at Sejong University (세종대학교)
          </BioSection>
          <BioSection>
            <BioYear>2021 ~ 2022</BioYear>
            Started his career as a Frontend Enginner at Korean startup company
          </BioSection>
          <BioSection>
            <BioYear>2022 ~ 2023</BioYear>
            Led developing mobile & web app at Korean fintech startup company
          </BioSection>
          <BioSection>
            <BioYear>2023 ~ 2026</BioYear>
            Worked at Hyundai, South Korea
          </BioSection>
          <BioSection>
            <BioYear>2026 ~ </BioYear>
            Works as a freelance
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as={"h3"} variant={"section-title"}>
            I 🤍
          </Heading>
          <Paragraph>
            Coffee, Books & Reading, Piano, Building side-projects, Driving
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Bobstyle23" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Bobstyle23
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/bobstyle23" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @bobstyle23
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/bobstyle_23" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @bobstyle_23
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mukhammadbobur-pakhriyev/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @mukhammadbobur-pakhriyev
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
