import { IconChevronRight } from "@tabler/icons-react";

const BreadCrumb = ({ title, root }: { title: string; root: string }) => {
  return (
    <div className="flex items-center text-white text-lg">
      <p>Home</p>
      {root && (
        <span className="flex items-center">
          <IconChevronRight />
          <p>{root}</p>
        </span>
      )}

      <span className="flex  items-center tracking-wide lowercase">
        <IconChevronRight />
        <p>{title}</p>
      </span>
    </div>
  );
};

export default BreadCrumb;
