import React from "react";
import Heading from "../Heading";
import Checkbox from "../../../../ui/check/Checkbox";

const JobType = () => {
  return (
    <div>
      <Heading>JobType</Heading>
      <div className="my-3 space-y-2">
        <Checkbox name="job-type" checkId="type-0" value="all" label="All" />
        <Checkbox
          name="job-type"
          checkId="type-1"
          value="fullTime"
          label="Full Time"
        />
        <Checkbox
          name="job-type"
          checkId="type-2"
          value="partTime"
          label="Part Time"
        />
        <Checkbox
          name="job-type"
          checkId="type-3"
          value="freelance"
          label="Freelance"
        />
        <Checkbox
          name="job-type"
          checkId="type-4"
          value="intern"
          label="Intern"
        />
      </div>
    </div>
  );
};

export default JobType;
