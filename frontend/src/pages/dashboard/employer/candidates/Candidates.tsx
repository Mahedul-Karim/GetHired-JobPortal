import React from "react";
import Section from "../../../../components/dashboard/common/Section";
import Heading from "../../../../components/dashboard/common/Heading";
import { TextSearch } from "lucide-react";
import AllCandidates from "../../../../components/dashboard/employer/candidates/AllCandidates";

const Candidates = () => {
  return (
    <>
      <Section>
        <Heading Icon={TextSearch} className="border-b border-solid pb-4">
          All Candidates
        </Heading>
        <AllCandidates />
      </Section>
    </>
  );
};

export default Candidates;
