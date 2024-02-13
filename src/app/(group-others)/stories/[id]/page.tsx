import Contact from "@/components/common/Contact";
import RelatedStories from "@/components/common/RelatedStories";
import SearchAndRelated from "@/components/ui/ServiceDetail/SearchAndRelated";
import StoryMedia from "@/components/ui/StoriesDetails/StoryMedia";

const StoryDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <StoryMedia id={id} />
        </div>
        <SearchAndRelated id={id} />
      </div>
      <RelatedStories />
      <Contact />
    </div>
  );
};

export default StoryDetailPage;
