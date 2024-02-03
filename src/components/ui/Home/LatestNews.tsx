import BlogCard from "@/components/common/BlogCard";
import HeadingDescription from "@/util/HeadingDescription";
import blogs from "../../../../public/db/blogs.json";

const LatestNews = () => {
  return (
    <div className="container my-24">
      <HeadingDescription
        className="text-center mb-14"
        headingText="Latest News"
        descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
      />
      <div className="grid grid-cols-4 gap-5">
        {blogs.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className={`${index === 0 && "col-span-2"}  bg-white rounded-md`}
          >
            <BlogCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
