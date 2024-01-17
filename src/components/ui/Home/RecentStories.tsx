"use client";
import HeadingText from "@/util/HeadingText";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import news from "../../../../public/db/news.json";

// Import Swiper styles
import NewsCard from "@/components/common/NewsCard";
import Button from "@/util/Button";
import { IconArrowRight } from "@tabler/icons-react";
import "swiper/css";

const RecentStories = () => {
  return (
    <div className="my-24">
      <div className="mb-12">
        <HeadingText className="text-center">Recent Stories</HeadingText>
        <p className="text-center">
          We offer a wide range of funeral services and arrangements to <br />{" "}
          help you honor and celebrate the life of your loved one.
        </p>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={true}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <NewsCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        className="border border-primary text-primary  mx-auto mt-10"
        icon={<IconArrowRight size={20} />}
      >
        See More
      </Button>
    </div>
  );
};

export default RecentStories;
