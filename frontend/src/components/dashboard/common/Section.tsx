import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <section className={`mt-8 bg-white rounded-lg p-4 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
