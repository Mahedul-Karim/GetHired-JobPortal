import React, { useEffect, useRef } from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";
import Card from "../jobs/Card";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ANIMATION_DELAY } from "../../util/util";
/**
 * grid-auto-flow: column;
    grid-auto-columns: calc((91.666667% / 4));
    overflow: clip;
 */
const LatestJobs = () => {
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
    <section className="mt-24 bg-primary-light-1 py-12">
      <Container as="div">
        <Heading>Latest Jobs</Heading>
        <Paragraph>Get started with best jobs</Paragraph>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8 sm:gap-[25px] gap-2"
          ref={containerRef}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <Card
              key={i}
              className="scale-0"
              style={{
                animationDelay: `${ANIMATION_DELAY * i}ms`,
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestJobs;
