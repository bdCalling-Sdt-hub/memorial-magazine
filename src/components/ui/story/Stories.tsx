"use client";

import StoryCard from "@/components/common/StoryCard";
import { useGetStoriesQuery } from "@/redux/features/story/storyApi";

const Stories = () => {
  const { data } = useGetStoriesQuery(undefined);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10">
      {data?.data.map((story: any, index: number) => (
        <StoryCard key={index} data={story} />
      ))}
    </div>
  );
};

export default Stories;
