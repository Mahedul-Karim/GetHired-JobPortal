import React, { useState } from "react";
import Applicant from "./Applicant";
import Empty from "../../../ui/Empty";

interface Props {
  recentCandidates: Array<any>;
}

const RecentApplicants: React.FC<Props> = ({ recentCandidates = [] }) => {
  const [data, setData] = useState([...recentCandidates]);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.length > 0 ? (
        data.map((candidate, i) => <Applicant key={i} />)
      ) : (
        <Empty text="No applicants found!" />
      )}
    </div>
  );
};

export default RecentApplicants;
