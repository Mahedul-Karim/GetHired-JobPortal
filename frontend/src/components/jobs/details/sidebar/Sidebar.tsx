import React from "react";
import Company from "./Company";
import JobSummary from "./JobSummary";

const Sidebar = () => {
  return (
    <aside>
      <Company />
      <JobSummary />
    </aside>
  );
};

export default Sidebar;
