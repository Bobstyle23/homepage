import NextLink from "next/link";
import Image, { StaticImageData } from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

interface GridItemProps {
  children: React.ReactNode;
  title: string;
  href: string;
  thumbnail: string | StaticImageData;
}

interface WorkGridItemProps {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: string | StaticImageData;
}

export const GridItem = ({
  children,
  title,
  href,
  thumbnail,
}: GridItemProps) => {
  return (
    <Box w={"100%"} textAlign={"center"}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          loading="lazy"
          style={{ borderRadius: "12px" }}
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => {
  return (
    <Box w={"100%"} textAlign={"center"}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          style={{ borderRadius: "12px" }}
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={4} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
        .grid-item-thumbnail {
           border-radius: 12px;
        }
      `}
    />
  );
};
