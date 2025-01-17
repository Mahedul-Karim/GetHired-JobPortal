import React, { useEffect } from "react";

type Action = (
  target: any,
  isIntersecting: boolean,
  observer: IntersectionObserver
) => void;

interface Params {
  threshold: number;
  action: Action;
}

const useIntersectionObserver = ({ threshold, action }: Params) => {
  const observeSections = (elements: Element[]) => {
    if (!elements || elements.length === 0) {
      console.error("Element not found!");
      return;
    }

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        action(entry.target, entry.isIntersecting, observer);
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      root: null,
    });

    elements.forEach((elem) => {
      if (elem) {
        observer.observe(elem);
      } else {
        console.error("Invalid element passed to observer:", elem);
      }
    });

    return ()=>observer.disconnect()
  };

  return { observeSections };
};

export default useIntersectionObserver;
