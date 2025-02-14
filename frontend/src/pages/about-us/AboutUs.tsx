import React from "react";
import Container from "../../components/layout/Container";
import HowItWorks from "../../components/about-us/HowItWorks";
import Button from "../../components/ui/button/Button";
import Testimonials from "../../components/home/Testimonials";

const INFO = [
  {
    src: "/assets/badge1.png",
    title: "15",
    description: "Years of Experience",
  },
  {
    src: "/assets/badge2.png",
    title: "42,369",
    description: "Job Offers",
  },
  {
    src: "/assets/badge3.png",
    title: "22,134",
    description: "Resumes Added",
  },
  {
    src: "/assets/badge4.png",
    title: "100%",
    description: "Clients Satisfaction",
  },
];

const AboutUs = () => {
  return (
    <Container as="main" className="py-36">
      <HowItWorks />
      <section className="my-16 p-6 sm:p-16 bg-gradient max-w-[700px] rounded-lg mx-auto">
        <p className="font-medium text-white text-base xs:text-lg">
          Explore New Jobs
        </p>
        <h2 className="text-xl xs:text-2xl sm:text-4xl leading-[1.4] my-4 font-semibold text-white">
          Don&apos;t just find. Be found. Put your CV in front of great
          employers
        </h2>
        <Button style={{ backgroundColor: "white", color: "black" }}>
          Join Now
        </Button>
      </section>
      <section>
        <h3 className="text-center my-4 text-dark-2 font-semibold lg:text-4xl sm:text-3xl text-xl xs:text-2xl">
          Get Hired by Top Companies
        </h3>
        <div className="grid grid-cols-2 xs:grid-cols-3 gap-10 lg:grid-cols-6 my-16 items-center">
          {[
            "/assets/airbnb.svg",
            "/assets/dropbox.svg",
            "/assets/fedex.svg",
            "/assets/google.svg",
            "/assets/hubspot.svg",
            "/assets/wallmart.svg",
          ].map((src, i) => (
            <img
              src={src}
              alt=""
              key={i}
              className="grayscale-[100%] transition-all duration-500 hover:grayscale-0"
            />
          ))}
        </div>
      </section>
      <section className="bg-primary py-14 grid grid-cols-2 gap-6 md:grid-cols-4 place-items-center rounded-lg px-2">
        {INFO.map((info, i) => (
          <figure className="flex flex-col items-center" key={i}>
            <div className="mb-2">
              <img src={info.src} alt="" className="max-w-20 object-cover" />
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-white text-xl xs:text-2xl lg:text-4xl font-semibold">
                {info.title}
              </h4>
              <p className="text-white xs:text-base text-sm">{info.description}</p>
            </div>
          </figure>
        ))}
      </section>
      <Testimonials />
    </Container>
  );
};

export default AboutUs;
