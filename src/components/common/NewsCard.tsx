import { INewsCard } from "@/types";
import React from "react";

const NewsCard: React.FC<{ data: INewsCard }> = ({ data }) => {
  return (
    <div className="relative rounded-md">
      <img src={data.image} className="w-full h-96 rounded-md" alt="" />
      <div className="backdrop-blur-sm bg-[#00000056] absolute left-0 bottom-0 w-full p-5 rounded-b-md text-center">
        <h2 className="text-lg text-white">{data.title}</h2>
        <p className="text-white text-sm">{data.date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
