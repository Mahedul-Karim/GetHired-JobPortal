import React from "react";
import Heading from "./Heading";
import Qualification from "./Qualification";



const Experience = () => {
  return (
    <>
      <Heading>Experience</Heading>
      <section className="mt-4 rounded-lg border border-solid py-6 xs:py-10 xs:pl-16 pl-14 xs:pr-10 pr-6 space-y-10">
        <Qualification />
        <Qualification />
        <Qualification />
        <Qualification />
      </section>
    </>
  );
};

export default Experience;
