"use client";

import { IStoryCard } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

const StoryCard: React.FC<{ data: IStoryCard }> = ({
  data: { image, title, date, id },
}) => {
  const router = useRouter();
  return (
    <div
      className="relative rounded-md cursor-pointer"
      onClick={() => router.push(`/stories/${id}`)}
    >
      <img src={image} className="w-full h-96 rounded-md" alt="" />
      <div className="backdrop-blur-sm bg-[#00000056] absolute left-0 bottom-0 w-full p-5 rounded-b-md text-center">
        <h2 className="text-lg text-white">{title}</h2>
        <p className="text-white text-sm">{date}</p>
      </div>
    </div>
  );
};

export default StoryCard;
