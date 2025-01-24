import React, { useEffect, useRef } from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ANIMATION_DELAY } from "../../util/util";

const TopCompanies = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { observeSections } = useIntersectionObserver({
    threshold: 0.8,
    action: (element, isIntersecting, observer) => {
      if (isIntersecting) {
        element.classList.add("scaleUp");
        observer.unobserve(element);
      }
    },
  });

  useEffect(() => {
    if (containerRef.current) {
      observeSections([...containerRef.current.children]);
    }
  }, []);

  return (
    <Container className="mt-24 sm:mt-32">
      <Heading>Top hiring Companies</Heading>
      <Paragraph>Get started with best companies</Paragraph>
      <div
        className="grid grid-cols-2 xs:grid-cols-3 gap-10 lg:grid-cols-6 my-8 items-center"
        ref={containerRef}
      >
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
            className="grayscale-[100%] scale-0 origin-bottom transition-all duration-500 hover:grayscale-0"
            style={{ animationDelay: `${ANIMATION_DELAY * i}ms` }}
          />
        ))}
      </div>
    </Container>
  );
};

export default TopCompanies;
