import React from "react";
import Popover from "../../../../components/ui/popover/Popover";
import Badge from "../../../../components/ui/Badge";
import JobList from "../../../../components/dashboard/user/applied-jobs/JobList";
import { useAlert } from "../../../../hooks/useAlert";
import { useData } from "../../../../hooks/useData";
import { useSelector } from "react-redux";
import Loader from "../../../../components/ui/loader/Loader";
import Error from "../../../../components/ui/Error";
import Empty from "../../../../components/ui/Empty";

const AppliedJobs = () => {
  const { error: onError } = useAlert();

  const { token } = useSelector((state: any) => state.user);

  const { data, isPending, error } = useData({
    key: ["applied-jobs"],
    endpoint: "user",
    options: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  if (isPending) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    onError(error.message);
    return <Error text={error.message} />;
  }

  if (data?.appliedJobs?.length === 0 || !data?.appliedJobs) {
    return <Empty text="You have not applied at any jobs" />;
  }


  return (
    <>
      <div className="flex items-center ml-auto max-w-[250px] gap-4">
        <p className="text-dark-2 font-medium whitespace-nowrap">Sort by:</p>{" "}
        <Popover defaultValue="Most Recent"></Popover>
      </div>
      <div className="mt-6 space-y-6">
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
      </div>
    </>
  );
};

export default AppliedJobs;
