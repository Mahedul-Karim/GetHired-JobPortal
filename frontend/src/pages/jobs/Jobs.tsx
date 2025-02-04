import React from "react";
import Container from "../../components/layout/Container";
import Sidebar from "../../components/jobs/all-jobs/Sidebar";
//bg-primary-light-1
const Jobs = () => {
  return (
    <section className=" py-36">
      <Container as="div" className="grid grid-cols-[0.4fr_1fr] gap-6">
        <Sidebar />
        <div className="bg-primary rounded-lg"></div>
      </Container>
    </section>
  );
};

export default Jobs;
