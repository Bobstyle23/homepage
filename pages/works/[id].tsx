import { useRouter } from "next/router";
import { works } from "../../data/works";
import WorkContent from "../../components/WorkContent";

const Work = () => {
  const router = useRouter();
  const { id } = router.query;

  const work = works.find((item) => item.id === id);

  if (!work) return null;

  return (
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
  );
};

export default Work;
