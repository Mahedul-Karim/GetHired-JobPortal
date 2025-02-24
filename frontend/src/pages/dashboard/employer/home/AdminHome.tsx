import React from "react";
import StateCard from "../../../../components/dashboard/common/StateCard";
import {
  NotebookText,
  UserRoundPen,
  UsersRound,
  Eye,
  BellRing,
  ReceiptText,
  ChartColumn,
} from "lucide-react";
import Section from "../../../../components/dashboard/common/Section";
import Heading from "../../../../components/dashboard/common/Heading";
import Notifications from "../../../../components/dashboard/user/home/Notifications";
import ApplicantChart from "../../../../components/dashboard/employer/home/ApplicantChart";
import RecentApplicants from "../../../../components/dashboard/employer/home/RecentApplicants";

const AdminHome = () => {
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
          Icon={NotebookText}
          value="25"
          label="Jobs Posted"
        />
        <StateCard
          gradientType={2}
          Icon={UsersRound}
          value="2500"
          label="Applicants"
        />
        <StateCard
          gradientType={3}
          Icon={UserRoundPen}
          value="25%"
          label="Profile Completed"
        />
        <StateCard
          gradientType={4}
          Icon={Eye}
          value="25"
          label="Total viewed"
        />
      </section>
      <Section>
        <Heading Icon={ChartColumn}>Applicant State</Heading>
        <ApplicantChart />
      </Section>
      <Section>
        <Heading Icon={BellRing}>Recent Notifications</Heading>
        <Notifications />
      </Section>
      <Section>
        <Heading Icon={ReceiptText}>Recent Applicants</Heading>
        <RecentApplicants />
      </Section>
    </>
  );
};

export default AdminHome;
