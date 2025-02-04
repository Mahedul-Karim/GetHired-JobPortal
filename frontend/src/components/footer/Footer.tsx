import React from "react";
import Container from "../layout/Container";
import Logo from "../ui/Logo";
import Heading from "../ui/section/Heading";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <section className="flex flex-col gap-1">
          <Logo
            style={{
              color: "white",
              fontWeight: 600,
            }}
          />
          <p className="text-gray-2 text-sm">
            GetHired is a job-finding portal provideng more than 28,000 job
            offers.
          </p>
        </section>
        <section>
          <Heading className="text-white !text-lg">For Employees</Heading>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-gray-2 text-sm">
              Why GetHired
            </p>
            <p className="text-gray-2 text-sm">
              Our Partners worldwide
            </p>
            <p className="text-gray-2 text-sm">
              Our Team
            </p>
            <p className="text-gray-2 text-sm">
              Pricing Plans
            </p>
          </div>
        </section>
        <section>
        <Heading className="text-white !text-lg">For Job Seekers</Heading>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-gray-2 text-sm">
              Why GetHired
            </p>
            <p className="text-gray-2 text-sm">
              Our Team
            </p>
            <p className="text-gray-2 text-sm">
              About Us
            </p>
            <p className="text-gray-2 text-sm">
              Companies
            </p>
          </div>
        </section>
        <section>
        <Heading className="text-white !text-lg">Help and Support</Heading>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-gray-2 text-sm">
              GetHired Reviews
            </p>
            <p className="text-gray-2 text-sm">
              Find a partner
            </p>
            <p className="text-gray-2 text-sm">
              Meet the team
            </p>
            <p className="text-gray-2 text-sm">
              Select Your Plan
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
