import React, { useEffect, useRef } from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";
import Card from "./categories/Card";
import { CATEGORIES_DATA } from "../../util/data";
import { ANIMATION_DELAY } from "../../util/util";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const PopularCategories = () => {
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
    <section className="bg-primary-light-1 py-12">
      <Container as="div">
        <Heading>Popular Categories</Heading>
        <Paragraph>Get started with suitable category</Paragraph>
        <div className="mt-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xs:gap-6 gap-2"
            ref={containerRef}
          >
            {CATEGORIES_DATA.map((cat, i) => (
              <Card
                key={i}
                src={cat.image}
                label={cat.label}
                className="scale-0"
                style={{ animationDelay: `${ANIMATION_DELAY * i}ms` }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularCategories;
