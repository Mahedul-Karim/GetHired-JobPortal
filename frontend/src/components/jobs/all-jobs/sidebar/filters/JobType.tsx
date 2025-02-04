import React from "react";
import Heading from "../Heading";
import Checkbox from "../../../../ui/check/Checkbox";

const JobType = () => {
  return (
    <div>
      <Heading>JobType</Heading>
      <div className="my-3 space-y-2">
        <Checkbox checkId="type-0" value="all" label="All" />
        <Checkbox checkId="type-1" value="fullTime" label="Full Time" />
        <Checkbox checkId="type-2" value="partTime" label="Part Time" />
        <Checkbox checkId="type-3" value="freelance" label="Freelance" />
        <Checkbox checkId="type-4" value="intern" label="Intern" />
      </div>
    </div>
  );
};

export default JobType;
