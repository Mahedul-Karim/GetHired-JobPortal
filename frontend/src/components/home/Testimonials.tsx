import React, { useRef } from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Card from "./testimonial/Card";
import { TESTIMONIAL_DATA } from "../../util/data";
import Button from "../ui/button/Button";

const Testimonials = () => {
  const swiperAction = useRef<SwiperType | null>(null);

  return (
    <Container className="mt-24 sm:mt-32">
      <Heading>Our Testimonial</Heading>
      <Paragraph>Here&apos;s what people has said about us</Paragraph>
      <div className="my-10 max-w-[800px] w-full mx-auto overflow-x-clip">
        <Swiper
          style={{ overflowX: "clip", overflowY: "visible" }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          onSwiper={(swiper) => (swiperAction.current = swiper)}
        >
          {TESTIMONIAL_DATA.map((test, i) => (
            <SwiperSlide key={i}>
              <Card
                review={test.review}
                image={test.image}
                userName={test.userName}
                job={test.job}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center mt-8 xs:mt-16 gap-4">
          <div>
            <Button
              variant="outline"
              className="!size-10 !rounded-full hover:bg-primary hover:text-white"
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
              className="!size-10 !rounded-full hover:bg-primary hover:text-white"
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
  );
};

export default Testimonials;
