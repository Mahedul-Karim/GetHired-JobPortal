import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import Section from "../../../../../components/dashboard/common/Section";
import Heading from "../../../../../components/dashboard/common/Heading";
import JobForm from "../../../../../components/dashboard/employer/jobs/create/JobForm";
import { useSelector } from "react-redux";
import Restricted from "../../../../../components/ui/Restricted";

const CreateJobs = () => {
  const { user } = useSelector((state: any) => state.user);

  if (user && user?.profileCompletion < 100) {
    return <Restricted text="Complete your profile to create jobs! ⚒" />;
  }

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
