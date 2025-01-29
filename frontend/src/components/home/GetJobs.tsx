import React, { useEffect, useRef } from "react";
import Container from "../layout/Container";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const GetJobs = () => {

  const containerRef = useRef<HTMLElement | null>(null);

  const { observeSections } = useIntersectionObserver({
    threshold: 0.8,
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
    <Container className="mt-16 grid md:grid-cols-2 gap-4 overflow-x-clip" ref={containerRef}>
      <div className="flex flex-col justify-center gap-3 opacity-0" data-pos="left">
        <h4 className="text-primary text-base sm:text-xl font-semibold">Get Jobs</h4>
        <h2 className="text-dark-0 font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl leading-[1.2]">
          Get World <span className="text-gradient"> 25,000+</span> <br />{" "}
          Talented People in <br />
          one place
        </h2>
        <p className="text-dark-0 text-xs xs:text-sm lg:text-base max-w-[515px]">
          Revolutionizing the Job Search Experience with GetHired. You need to
          create an account to find the best and preferred job according your
          qualification and skills.
        </p>
      </div>
      <div className="relative rounded-md z-[1] opacity-0" data-pos="right">
        <div className="absolute top-16 left-0 size-16 lg:size-24 bg-primary rounded-md -z-[1]" />
        <div className="absolute top-16 right-0 size-12 bg-yellow-400 rounded-md -z-[1]" />
        <div className="absolute top-[27%] left-[18%] size-14 lg:size-16 bg-secondary rounded-md -z-[1]" />
        <img src="/assets/get-job.png" alt="" className="object-cover mx-auto max-h-[380px] md:max-h-[450px]"/>
      </div>
    </Container>
  );
};

export default GetJobs;
