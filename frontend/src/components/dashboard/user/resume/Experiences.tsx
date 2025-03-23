import React, { useState } from "react";

import Section from "../../common/Section";
import Heading from "../../common/Heading";

import { PencilRuler } from "lucide-react";
import ExperienceModal from "../../../ui/modals/resume/ExperienceModal";
import { formatDate } from "../../../../util/util";

interface Props {
  experiences: any[];
  setResume: any;
}

const Experiences: React.FC<Props> = ({ experiences = [], setResume }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section className="mt-4">
        <div className="pb-2 border-b border-solid flex items-center justify-between">
          <Heading>Experiences</Heading>
          <div>
            <button onClick={() => setOpen(true)}>
              <PencilRuler className="size-5 text-primary" />
            </button>
          </div>
        </div>
        {experiences.length > 0 &&
          experiences.map((exp, i) => (
            <div className="mt-4" key={i}>
              <div className="space-y-2 py-4 border-b border-solid">
                <h3 className="text-dark-2 xs:text-lg font-semibold">
                  {exp?.workingPosition}
                </h3>
                <p className="xs:text-base text-sm text-gray-600">
                  {exp?.companyName}
                </p>
                <p className="text-sm xs:text-base text-gray-600">
                  {exp?.workedFor}
                </p>
                <div className="text-xs xs:text-sm flex-col xs:flex-row text-gray-600 flex xs:items-center xs:gap-6 gap-4">
                  <p>Start Date: {formatDate(exp?.startDate)}</p>
                  {!exp?.currentlyWorking && (
                    <p>End Date: {formatDate(exp?.endDate)}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
      </Section>
      <ExperienceModal
        open={open}
        setOpen={setOpen}
        experiences={experiences}
        setResume={setResume}
      />
    </>
  );
};

export default Experiences;
