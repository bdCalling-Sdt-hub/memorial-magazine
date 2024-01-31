import { IHeadingDescription } from "@/types";
import React from "react";

const HeadingDescription: React.FC<IHeadingDescription> = ({
  headingText,
  descriptionText,
  className,
}) => {
  return (
    <div className={`${className} space-y-2 `}>
      <h2 className="text-4xl font-semibold  text-[#3A3A3A] ">{headingText}</h2>
      <p className="">{descriptionText}</p>
    </div>
  );
};

export default HeadingDescription;
