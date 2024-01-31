import { IconChevronRight } from "@tabler/icons-react";

const BreadCrumb = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center text-white text-lg">
      <p>Home</p>
      <IconChevronRight />
      <p>{title}</p>
    </div>
  );
};

export default BreadCrumb;
