"use client";
import HeadingText from "@/util/HeadingText";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="container my-24">
      <h2 className="text-center text-xl font-semibold">Our Clients</h2>
      <HeadingText className="text-center">Testimonials</HeadingText>
      <h2 className="hr-lines mx-auto">❝</h2>
      <div className="mx-52">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          centeredSlides={true}
          style={{
            width: "100%",
            height: "280px",
            textAlign: "center",
            padding: "50px 0",
          }}
        >
          {[...Array(3)].map((item, index) => (
            <SwiperSlide key={index}>
              <p className="my-4">
                Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what
                you do. If you haven&#39;t found it yet, keep Peopeative are the
                luckiest people.
              </p>
              <h2 className="text-xl font-semibold">Jhon Smith, CEO it</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
