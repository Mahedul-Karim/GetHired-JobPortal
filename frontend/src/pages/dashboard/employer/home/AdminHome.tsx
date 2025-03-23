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
import { useSelector } from "react-redux";
import { useData } from "../../../../hooks/useData";
import { useAlert } from "../../../../hooks/useAlert";
import Loader from "../../../../components/ui/loader/Loader";
import Error from "../../../../components/ui/Error";

const AdminHome = () => {
  const { user, token } = useSelector((state: any) => state.user);

  const { data, isPending, error } = useData({
    key: ["company-states"],
    endpoint: "company",
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
          {user?.companyName}
        </span>
      </p>
      <section className="mt-8 grid xs:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
        <StateCard
          gradientType={1}
          Icon={NotebookText}
          value={data?.state?.jobsPosted}
          label="Jobs Posted"
        />
        <StateCard
          gradientType={2}
          Icon={UsersRound}
          value={data?.state?.applicants}
          label="Applicants"
        />
        <StateCard
          gradientType={3}
          Icon={UserRoundPen}
          value={`${data?.state?.profileCompletion}%`}
          label="Profile Completed"
        />
        <StateCard
          gradientType={4}
          Icon={Eye}
          value={data?.state?.profileViewed}
          label="Total viewed"
        />
      </section>
      <Section>
        <Heading Icon={ChartColumn}>Applicant State</Heading>
        <ApplicantChart applicants={data?.applicants} />
      </Section>
      <Section>
        <Heading Icon={BellRing}>Recent Notifications</Heading>
        <Notifications notifications={data?.notifications} />
      </Section>
      <Section>
        <Heading Icon={ReceiptText}>Recent Applicants</Heading>
        <RecentApplicants recentCandidates={data?.recentCandidates} />
      </Section>
    </>
  );
};

export default AdminHome;
