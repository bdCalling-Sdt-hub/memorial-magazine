import Contact from "@/components/common/Contact";
import RelatedStories from "@/components/common/RelatedStories";
import StoryMedia from "@/components/ui/StoriesDetails/StoryMedia";
import Input from "@/util/Input";
import stories from "../../../../../public/db/news.json";

const StoryDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <StoryMedia id={id} />
        </div>
        <div className="col-span-4 space-y-5">
          <div className="shadow bg-white p-4 py-6 rounded">
            <h2 className=" text-lg mb-4 border-l border-orange-400 px-2">
              Search
            </h2>
            <Input
              className="w-full border-gray-200"
              placeholder="Search Here"
            />
          </div>
          <div className="shadow bg-white p-4 py-6 rounded">
            <h2 className=" text-lg mb-4 border-l border-primary px-2">
              Related Stories
            </h2>
            {stories.slice(0, 5).map((story, index) => (
              <div key={index} className="mb-3 flex items-center gap-2">
                <img
                  src={story.image}
                  alt=""
                  className="w-40 h-32 rounded-md"
                />
                <div>
                  <p>{story.date}</p>
                  <h2>{story.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedStories stories={stories} />
      <Contact />
    </div>
  );
};

export default StoryDetailPage;
