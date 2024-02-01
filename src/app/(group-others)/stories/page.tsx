import Contact from "@/components/common/Contact";
import StoryCard from "@/components/common/StoryCard";
import HeadingDescription from "@/util/HeadingDescription";
import stories from "../../../../public/db/news.json";

const StoriesPage = () => {
  return (
    <div className="container my-16">
      <HeadingDescription
        className="text-center"
        headingText="All Stories"
        descriptionText="We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one."
      />
      <div className="grid grid-cols-4 gap-4 my-10">
        {stories.map((story, index) => (
          <StoryCard key={index} data={story} />
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default StoriesPage;
