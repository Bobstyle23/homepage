import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import { Tag } from "../components/work";
import { works } from "../data/works";
import { useTranslations } from "next-intl";

const Works = () => {
  const t = useTranslations("works");
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("title")}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {works.map((work) => (
            <Section key={work.id} delay={work.delay}>
              <WorkGridItem
                id={work.id}
                title={work.title}
                thumbnail={work.thumbnail}
              >
                {work.description}
              </WorkGridItem>
              {work.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Section>
          ))}
        </SimpleGrid>
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

export default Works;
