"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { useGetStoriesQuery } from "@/redux/features/story/storyApi";
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
  const { data, isLoading, isError } = useGetStoriesQuery(undefined);

  return (
    <div className="my-20">
      <HeadingDescription
        className="text-center mb-14"
        headingText="Your Stories"
        descriptionText="Tell your stories of your love one,who has moved to next level of their life"
      />

      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={true}
        breakpoints={{
          690: {
            slidesPerView: perPage,
          },
        }}
      >
        {data?.data?.map((item: any, index: number) => (
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
