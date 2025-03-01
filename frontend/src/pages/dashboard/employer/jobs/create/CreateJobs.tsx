import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import Section from "../../../../../components/dashboard/common/Section";
import Heading from "../../../../../components/dashboard/common/Heading";
import JobForm from "../../../../../components/dashboard/employer/jobs/create/JobForm";

const CreateJobs = () => {
  return (
    <>
      <Section>
        <Heading
          Icon={BriefcaseBusiness}
          className="border-b border-solid pb-4"
        >
          Job Details
        </Heading>
        <JobForm />
      </Section>
    </>
  );
};

export default CreateJobs;
