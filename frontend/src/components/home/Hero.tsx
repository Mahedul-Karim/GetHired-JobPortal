import React, { useEffect, useRef } from "react";
import Container from "../layout/Container";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Hero = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { observeSections } = useIntersectionObserver({
    threshold: 0.3,
    action: (element, isIntersecting, observer) => {
      if (isIntersecting) {
        const className =
          element.dataset.pos === "left" ? "slideFromLeft" : "slideFromRight";
        element.classList.add(className);
        observer.unobserve(element)
      }
    },
  });

  useEffect(() => {
    if (containerRef.current) {
      observeSections([...containerRef.current.children]);
    }
  }, []);

  return (
    <section
      className={`bg-[url('/assets/hero-bg.png')] bg-no-repeat bg-cover pt-28 xs:pt-36 bg-[top_center]`}
    >
      <Container
        as="div"
        className="grid gap-y-[20px] sm:gap-y-[0px] sm:grid-cols-2 items-center overflow-x-clip"
        ref={containerRef}
      >
        <div data-pos="left" className={`opacity-0`}>
          <h1 className="text-dark-0 max-w-[370px] sm:max-w-[480px] leading-[1.1] text-5xl md:text-6xl lg:text-7xl font-semibold">
            Find your <span className="text-gradient">dream job</span> today
          </h1>
          <p className="text-dark-0 text-sm sm:text-base my-4 max-w-[515px]">
            Explore all the most exciting job roles based on your interest and
            study major. your dream job is waiting for you.
          </p>
          <p className="text-dark-0 font-medium text-lg xs:text-xl">
            25,478 Offers Worldwide
          </p>
        </div>
        <div
          data-pos="right"
          className={`relative opacity-0`}
        >
          <img src="/assets/face.png" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
