import StoryCard from "@/components/common/StoryCard";
import { IStoryCard } from "@/types";
import HeadingDescription from "@/util/HeadingDescription";

type IRelatedStories = {
  stories: IStoryCard[];
};

const RelatedStories = ({ stories }: IRelatedStories) => {
  return (
    <section>
      <HeadingDescription className="my-14" headingText="Related Stories" />
      <div className="grid grid-cols-4 gap-5">
        {stories.slice(0, 4).map((item, index) => (
          <StoryCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedStories;
