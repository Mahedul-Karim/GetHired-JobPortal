import React, { useState } from "react";

import Section from "../../common/Section";
import Heading from "../../common/Heading";

import { PencilRuler } from "lucide-react";
import ExperienceModal from "../../../ui/modals/resume/ExperienceModal";

const Experiences = () => {
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
        <div className="mt-4">
          <div className="space-y-2 py-4 border-b border-solid">
            <h3 className="text-dark-2 xs:text-lg font-semibold">
              Senior UI / UX Designer and Developer
            </h3>
            <p className="xs:text-base text-sm text-gray-600">Google INC</p>
            <p className="text-sm xs:text-base text-gray-600">
              Worked for 6 years
            </p>
            <div className="text-xs xs:text-sm flex-col xs:flex-row text-gray-600 flex xs:items-center xs:gap-6 gap-4">
              <p>Start Date: 20 Aug,2025</p>
              <p>End Date: 20 Aug,2025</p>
            </div>
          </div>
        </div>
      </Section>
      <ExperienceModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Experiences;
