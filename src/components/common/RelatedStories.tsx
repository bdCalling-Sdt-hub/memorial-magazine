"use client";
import StoryCard from "@/components/common/StoryCard";
import { useGetStoriesQuery } from "@/redux/features/story/storyApi";
import HeadingDescription from "@/util/HeadingDescription";

const RelatedStories = () => {
  const { data } = useGetStoriesQuery(undefined);
  return (
    <section>
      <HeadingDescription className="my-14" headingText="Related Stories" />
      <div className="grid grid-cols-4 gap-5">
        {data?.data?.map((item: any, index: number) => (
          <StoryCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedStories;
