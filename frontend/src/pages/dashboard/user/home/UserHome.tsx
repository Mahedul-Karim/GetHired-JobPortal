import React from "react";

import { Pin, UsersRound, FileUser, MailPlus, ChartColumn,BellRing } from "lucide-react";
import StateCard from "../../../../components/dashboard/common/StateCard";
import Heading from "../../../../components/dashboard/common/Heading";
import ActivityChart from "../../../../components/dashboard/user/home/ActivityChart";
import Section from "../../../../components/dashboard/common/Section";
import Notifications from "../../../../components/dashboard/user/home/Notifications";

const UserHome = () => {
  return (
    <>
      <p className="xs:text-lg">
        Welcome back 🎉,{" "}
        <span className="text-gradient font-medium text-lg xs:text-xl">
          John Doe
        </span>
      </p>
      <section className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
        <StateCard
          gradientType={1}
          Icon={UsersRound}
          value="25"
          label="visitor"
        />
        <StateCard
          gradientType={2}
          Icon={FileUser}
          value="2500"
          label="Jobs Applied"
        />
        <StateCard
          gradientType={3}
          Icon={MailPlus}
          value="25"
          label="Get Response"
        />
        <StateCard gradientType={4} Icon={Pin} value="25" label="Saved Jobs" />
      </section>
      <Section>
        <Heading Icon={ChartColumn}>State Chart</Heading>
        <ActivityChart />
      </Section>
      <Section>
        <Heading Icon={BellRing}>Recent Notifications</Heading>
        <Notifications />
      </Section>
    </>
  );
};

export default UserHome;
