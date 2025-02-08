import React from "react";
import List from "./List";

const Responsibilities = () => {
  return (
    <>
      <h3 className="text-base sm:text-lg font-semibold text-black mt-8 mb-4">
        Responsibilites:
      </h3>
      <section className="my-4 space-y-4">
        <List />
        <List />
        <List />
        <List />
        <List />
      </section>
    </>
  );
};

export default Responsibilities;
