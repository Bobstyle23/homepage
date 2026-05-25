import { useRouter } from "next/router";
import { works } from "../../data/works";
import WorkContent from "../../components/WorkContent";
import { GetStaticPaths, GetStaticProps } from "next";
import { CaseStudyBlock } from "@/components/work";

const Work = () => {
  const router = useRouter();
  const { id } = router.query;

  const work = works.find((item) => item.id === id);

  if (!work) return null;

  return (
    <>
      <WorkContent
        layoutTitle={work.title}
        workTitle={work.title}
        year={work.year}
        description={work.description}
        images={work.images}
        items={[
          {
            label: "Website",
            url: work.website,
          },
          {
            label: "Platform",
            value: work.platform,
          },
          {
            label: "Stack",
            value: work.stack,
          },
        ]}
      />
      <CaseStudyBlock title="Problem">{work.problem}</CaseStudyBlock>
      <CaseStudyBlock title="Solution">{work.solution}</CaseStudyBlock>

      <CaseStudyBlock title="Tech Decisions">
        {work.tech_decisions}
      </CaseStudyBlock>

      <CaseStudyBlock title="Challenges">{work.challenges}</CaseStudyBlock>

      <CaseStudyBlock title="Lessons Learned">{work.lessons}</CaseStudyBlock>
    </>
  );
};

export default Work;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths =
    locales?.flatMap((locale) =>
      works.map((work) => ({
        params: { id: work.id },
        locale,
      })),
    ) ?? [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const id = params?.id as string;

  const work = works.find((item) => item.id === id);

  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work,
      locale,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};
