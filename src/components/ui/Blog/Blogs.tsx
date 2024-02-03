import BlogCard from "@/components/common/BlogCard";
import HeadingDescription from "@/util/HeadingDescription";
import blogsList from "../../../../public/db/blogs.json";

const Blogs = () => {
  return (
    <div>
      <HeadingDescription
        className="text-center"
        headingText="Latest Blog"
        descriptionText="We offer a wide range of funeral services and arrangements to help you honor and celebrate the life of your loved one."
      />
      <div className="grid grid-cols-2 gap-5 mt-16">
        {blogsList.map((blog, index) => (
          <BlogCard data={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
