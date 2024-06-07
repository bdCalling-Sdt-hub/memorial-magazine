import Stories from "@/components/ui/story/Stories";
import HeadingDescription from "@/util/HeadingDescription";

const StoriesPage = () => {
  return (
    <div className="container my-16">
      <HeadingDescription
        className="text-center"
        headingText="All Stories"
        descriptionText="We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one."
      />
      <Stories />
      {/* <Contact /> */}
    </div>
  );
};

export default StoriesPage;
