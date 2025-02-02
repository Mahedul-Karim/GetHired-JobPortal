import React from "react";
import Hero from "../../components/home/Hero";
import TopCompanies from "../../components/home/TopCompanies";
import LatestJobs from "../../components/home/LatestJobs";
import GetJobs from "../../components/home/GetJobs";
import PopularCategories from "../../components/home/PopularCategories";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <TopCompanies />
      <LatestJobs />
      <GetJobs />
      <PopularCategories />
      <Testimonials />
    </>
  );
};

export default Home;
