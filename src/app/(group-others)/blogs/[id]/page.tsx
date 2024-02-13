import Contact from "@/components/common/Contact";
import RelatedStories from "@/components/common/RelatedStories";
import BlogMedia from "@/components/ui/BlogDetail/BlogMedia";
import Input from "@/util/Input";

const BlogDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const categories = [
    "People Stories",
    "Uniformed Personal Stories",
    "Pets Stories",
  ];
  return (
    <div className="container my-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <BlogMedia id={id} />
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
              Categories
            </h2>
            {categories.slice(0, 5).map((category, index) => (
              <div key={index} className="mb-3 border p-3 rounded shadow">
                <h2>{category}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedStories />
      <Contact />
    </div>
  );
};

export default BlogDetailPage;
