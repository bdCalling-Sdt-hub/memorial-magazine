import Button from "@/util/Button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const BlogCard = ({ data }: { data: any }) => {
  const { image, title, id, date } = data;
  return (
    <div className="bg-white rounded-xl">
      <img src={image} className="rounded-t-md w-full" alt="" />
      <div className="p-4 space-y-4">
        <p>{date}</p>
        <h2 className="text-xl font-semibold">{title}</h2>

        <Link href={`/blogs/${id}`}>
          <Button
            className="border border-primary mt-10 text-primary"
            icon={<IconArrowRight size={18} />}
          >
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
