import React from "react";
import Container from "../layout/Container";
import Heading from "../ui/section/Heading";
import Paragraph from "../ui/section/Paragraph";
import Card from "../jobs/Card";

const LatestJobs = () => {
  return (
    <section className="mt-24 bg-primary-light-1 py-12">
      <Container as="div">
        <Heading>Latest Jobs</Heading>
        <Paragraph>Get started with best jobs</Paragraph>
        <div className="grid grid-cols-4 mt-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </section>
  );
};

export default LatestJobs;
