import React from "react";

import {
  Pin,
  UsersRound,
  FileUser,
  MailPlus,
  ChartColumn,
  BellRing,
  UserRoundPen,
} from "lucide-react";
import StateCard from "../../../../components/dashboard/common/StateCard";
import Heading from "../../../../components/dashboard/common/Heading";
import ActivityChart from "../../../../components/dashboard/user/home/ActivityChart";
import Section from "../../../../components/dashboard/common/Section";
import Notifications from "../../../../components/dashboard/user/home/Notifications";
import Loader from "../../../../components/ui/loader/Loader";
import { useSelector } from "react-redux";
import { useData } from "../../../../hooks/useData";
import { useAlert } from "../../../../hooks/useAlert";
import Error from "../../../../components/ui/Error";

const UserHome = () => {
  const { user, token } = useSelector((state: any) => state.user);

  const { data, isPending, error } = useData({
    key: ["user-states"],
    endpoint: "user/state",
    options: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  const { error: onError } = useAlert();

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


  return (
    <>
      <p className="xs:text-lg">
        Welcome back 🎉,{" "}
        <span className="text-gradient font-medium text-lg xs:text-xl">
          {user?.firstName} {user?.lastName}
        </span>
      </p>
      <section className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
        <StateCard
          gradientType={1}
          Icon={UsersRound}
          value={data?.state?.visitors}
          label="visitor"
        />
        <StateCard
          gradientType={2}
          Icon={FileUser}
          value={data?.state?.jobsApplied}
          label="Jobs Applied"
        />
        <StateCard
          gradientType={3}
          Icon={UserRoundPen}
          value={`${data?.state?.profileCompletion}%`}
          label="Profile Completed"
        />
        <StateCard
          gradientType={4}
          Icon={Pin}
          value={data?.state?.savedJobs}
          label="Saved Jobs"
        />
      </section>
      <Section>
        <Heading Icon={ChartColumn}>State Chart</Heading>
        <ActivityChart chartData={data?.data} />
      </Section>
      <Section>
        <Heading Icon={BellRing}>Recent Notifications</Heading>
        <Notifications notifications={data?.notifications} />
      </Section>
    </>
  );
};

export default UserHome;
