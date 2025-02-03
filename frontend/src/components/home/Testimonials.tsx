import React, { useRef } from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Card from "./testimonial/Card";
import { TESTIMONIAL_DATA } from "../../util/data";

const Testimonials = () => {

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
        
      </div>
    </Container>
  );
};

export default Testimonials;
