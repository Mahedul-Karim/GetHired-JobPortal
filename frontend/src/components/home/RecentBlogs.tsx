import React, { useRef } from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";
import Card from "../blogs/Card";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Button from "../ui/button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const RecentBlogs = () => {
  const swiperAction = useRef<SwiperType | null>(null);

  return (
    <section className="mt-24 bg-primary-light-1 py-12">
      <Container as="div">
        <Heading>Recent Blogs</Heading>
        <Paragraph>Advice on Job and Talent Search.</Paragraph>
        <div className="mt-8 overflow-x-clip">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            loop
            onSwiper={(swiper) => (swiperAction.current = swiper)}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <SwiperSlide key={i}>
                <Card />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center mt-8 gap-4">
            <div>
              <Button
                variant="outline"
                className="!size-8 xs:!size-10 !rounded-full hover:bg-primary hover:text-white"
                style={{
                  padding: 0,
                }}
                onClick={() => swiperAction.current?.slidePrev()}
              >
                <ChevronLeft />
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="!size-8 xs:!size-10 !rounded-full hover:bg-primary hover:text-white"
                style={{
                  padding: 0,
                }}
                onClick={() => swiperAction.current?.slideNext()}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogs;
