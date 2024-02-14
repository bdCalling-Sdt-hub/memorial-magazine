"use client";
import {
  useGetStoriesDetailsQuery,
  useGetStoriesQuery,
} from "@/redux/features/story/storyApi";
import Input from "@/util/Input";
import { imgUrl } from "../../../../config";

const SearchAndRelated = ({ id }: { id: string }) => {
  const { data: dataDetail } = useGetStoriesDetailsQuery(id);
  const { data } = useGetStoriesQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
  });
  const categoryId = dataDetail?.data?.category_id;

  const relateStories = data?.data.filter(
    (item: any) => item.category_id === categoryId
  );

  return (
    <div className="col-span-4 space-y-5">
      <div className="shadow bg-white p-4 py-6 rounded">
        <h2 className=" text-lg mb-4 border-l border-orange-400 px-2">
          Search
        </h2>
        <Input className="w-full border-gray-200" placeholder="Search Here" />
      </div>
      <div className="shadow bg-white p-4 py-6 rounded">
        <h2 className=" text-lg mb-4 border-l border-primary px-2">
          Related Stories
        </h2>
        {relateStories?.map((item: any, index: number) => (
          <div key={index} className="mb-3 flex items-center gap-2">
            <img
              src={`${imgUrl}${item.story_image[0]}`}
              alt=""
              className="w-40 h-32 rounded-md"
            />
            <div>
              <p>{item.date}</p>
              <h2>{item.story_title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndRelated;
