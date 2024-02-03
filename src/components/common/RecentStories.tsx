"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import news from "../../../public/db/news.json";

// Import Swiper styles

import Button from "@/util/Button";
import HeadingDescription from "@/util/HeadingDescription";
import { IconArrowRight } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import "swiper/css";
import StoryCard from "./StoryCard";

const RecentStories = () => {
  const path = usePathname();
  const router = useRouter();
  const perPage = path === "/about-us" ? 4 : 6;

  return (
    <div className="my-20">
      <HeadingDescription
        className="text-center mb-14"
        headingText="Recent Stories"
        descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
      />

      <Swiper
        spaceBetween={15}
        slidesPerView={perPage}
        modules={[Autoplay]}
        autoplay={true}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <StoryCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        className="border border-primary text-primary  mx-auto mt-10"
        onClick={() => router.push("/stories")}
        icon={<IconArrowRight size={20} />}
      >
        See More
      </Button>
    </div>
  );
};

export default RecentStories;
