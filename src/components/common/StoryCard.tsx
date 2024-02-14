"use client";

import { IStoryCard } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { imgUrl } from "../../../config";

const StoryCard: React.FC<{ data: IStoryCard }> = ({ data }) => {
  const { story_image, story_title, id, birth_date, death_date } = data;
  const router = useRouter();
  const birth = new Date(birth_date);
  const dead = new Date(death_date);

  return (
    <div
      className="relative rounded-md cursor-pointer"
      onClick={() => router.push(`/stories/${id}`)}
    >
      <img
        src={`${imgUrl}${story_image[0]}`}
        className="w-full h-96 rounded-md"
        alt=""
      />
      <div className="backdrop-blur-sm bg-[#00000056] absolute left-0 bottom-0 w-full p-5 rounded-b-md text-center">
        <h2 className="text-lg text-white">{story_title}</h2>
        <p className="text-white text-sm">{`${birth.toDateString()} - ${dead.toDateString()}`}</p>
      </div>
    </div>
  );
};

export default StoryCard;
