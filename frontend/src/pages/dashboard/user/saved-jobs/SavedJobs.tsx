import React from "react";
import Popover from "../../../../components/ui/popover/Popover";
import JobList from "../../../../components/dashboard/user/applied-jobs/JobList";

const SavedJobs = () => {
  return (
    <>
      <div className="flex items-center ml-auto max-w-[250px] gap-4">
        <p className="text-dark-2 font-medium whitespace-nowrap">Sort by:</p>{" "}
        <Popover defaultValue="Most Recent"></Popover>
      </div>
      <div className="mt-6 space-y-6">
        <JobList applied={false}/>
        <JobList applied={false}/>
        <JobList applied={false}/>
        <JobList applied={false}/>
        <JobList applied={false}/>
      </div>
    </>
  );
};

export default SavedJobs;
