import React from "react";
import Section from "../../../../../components/dashboard/common/Section";
import Heading from "../../../../../components/dashboard/common/Heading";

import { BriefcaseBusiness } from "lucide-react";
import AllJobs from "../../../../../components/dashboard/employer/jobs/manage/AllJobs";

const ManageJobs = () => {
  return (
    <>
      <Section>
        <Heading
          Icon={BriefcaseBusiness}
          className="border-b border-solid pb-4"
        >
          All Jobs
        </Heading>
        <AllJobs />
      </Section>
    </>
  );
};

export default ManageJobs;
