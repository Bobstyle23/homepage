import { Badge, Container, List, ListItem, Link } from "@chakra-ui/react";
import Layout from "./layouts/article";
import { Meta, Title, WorkImage } from "./work";
import Paragraph from "./paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type WorkMetaItem = {
  label: string;
  value?: string;
  url?: string;
};

type Image = {
  url: string;
  alt: string;
};

interface Props {
  layoutTitle: string;
  workTitle: string;
  year: number;
  description: string;
  items: WorkMetaItem[];
  images: Image[];
}

const WorkContent = ({
  layoutTitle,
  workTitle,
  year,
  description,
  items,
  images,
}: Props) => {
  return (
    <Layout title={layoutTitle}>
      <Container>
        <Title>
          {workTitle} <Badge>{year}</Badge>
        </Title>
        <Paragraph>{description}</Paragraph>
      </Container>
      <List ml={4} my={4} display={"flex"} flexDirection={"column"} gap={1}>
        {items
          .filter((item) => item.url || item.value)
          .map((item) => (
            <ListItem key={item.label}>
              <Meta>{item.label}</Meta>

              {item.url ? (
                <Link href={item.url} target="_blank">
                  Live Demo <ExternalLinkIcon mx={2} />
                </Link>
              ) : (
                <span>{item.value}</span>
              )}
            </ListItem>
          ))}{" "}
      </List>
      {images.map((img) => (
        <WorkImage key={img.url} src={img.url} alt={img.alt} />
      ))}
    </Layout>
  );
};

export default WorkContent;
