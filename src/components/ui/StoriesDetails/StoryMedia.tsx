"use client";

import { useGetStoriesDetailsQuery } from "@/redux/features/story/storyApi";
import { imgUrl } from "../../../../config";

const StoryPart = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetStoriesDetailsQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-justify">
      <figure>
        <img
          src={`${imgUrl}${data?.data?.story_image[0]}`}
          className="w-full h-[550px] object-cover rounded"
          alt=""
        />
        <figcaption className="mt-4 text-lg">
          {data?.data?.description}
        </figcaption>
      </figure>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
        {data?.data?.story_image.map((image: string, index: number) => (
          <div key={index}>
            <img
              src={`${imgUrl}${data?.data?.story_image[index + 1]}`}
              className="w-full  object-cover rounded"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryPart;
