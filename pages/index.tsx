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
import { useTranslations } from "next-intl";
import Timeline from "@/components/timeline";

const Page = () => {
  const home = useTranslations("home");
  const bio = useTranslations("bio");

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
          {home("greeting")}
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant={"page-title"}>
              {home("name")}
            </Heading>
            <Text>{home("role")}</Text>
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
            {home("workTitle")}
          </Heading>
          <Paragraph>{home("workText")}</Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href={"/works"}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {home("portfolioButton")}
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Timeline />
          {/*<Heading as={"h3"} variant={"section-title"}>
            {home("bioTitle")}
          </Heading>
          */}
          {/*<BioSection>
            <BioYear>1996</BioYear>
            {bio("born")}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {bio("university")}
          </BioSection>
          <BioSection>
            <BioYear>2021 ~ 2022</BioYear>
            {bio("startup")}
          </BioSection>
          <BioSection>
            <BioYear>2022 ~ 2023</BioYear>
            {bio("fintech")}
          </BioSection>
          <BioSection>
            <BioYear>2023 ~ 2026</BioYear>
            {bio("hyundai")}
          </BioSection>
          <BioSection>
            <BioYear>2026 ~ </BioYear>
            {bio("freelance")}
          </BioSection>*/}
        </Section>
        <Section delay={0.3}>
          <Heading as={"h3"} variant={"section-title"}>
            {home("interestsTitle")} 🤍
          </Heading>
          <Paragraph>{home("interests")}</Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            {home("webTitle")}
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

export default Page;
