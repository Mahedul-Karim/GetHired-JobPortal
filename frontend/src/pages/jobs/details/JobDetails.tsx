import React from "react";
import Container from "../../../components/layout/Container";
import Sidebar from "../../../components/jobs/details/sidebar/Sidebar";
import Main from "../../../components/jobs/details/main/Main";
import { useParams } from "react-router";

const JobDetails = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <Container className="py-36 grid md:grid-cols-[1fr_0.5fr] gap-6">
      <Main />
      <Sidebar />
    </Container>
  );
};

export default JobDetails;
