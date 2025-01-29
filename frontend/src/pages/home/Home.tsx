import React from "react";
import Hero from "../../components/home/Hero";
import TopCompanies from "../../components/home/TopCompanies";
import LatestJobs from "../../components/home/LatestJobs";
import GetJobs from "../../components/home/GetJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <TopCompanies />
      <LatestJobs />
      <GetJobs />
    </>
  );
};

export default Home;
