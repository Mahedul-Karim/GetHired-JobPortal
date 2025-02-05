import React from "react";
import Container from "../../components/layout/Container";
import Sidebar from "../../components/jobs/all-jobs/Sidebar";
import Main from "../../components/jobs/all-jobs/Main";
//bg-primary-light-1
const Jobs = () => {
  return (
    <section className=" py-36">
      <Container as="div" className="grid md:grid-cols-[0.4fr_1fr] gap-6">
        <Sidebar />
        <Main />
      </Container>
    </section>
  );
};

export default Jobs;
