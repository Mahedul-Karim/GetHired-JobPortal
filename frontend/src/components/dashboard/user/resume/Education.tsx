import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";
import { PencilRuler } from "lucide-react";
import EducationModal from "../../../ui/modals/resume/EducationModal";

const Education = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section className="mt-4">
        <div className="pb-2 border-b border-solid flex items-center justify-between">
          <Heading>Education</Heading>
          <div>
            <button onClick={() => setOpen(true)}>
              <PencilRuler className="size-5 text-primary" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="space-y-2 py-4 border-b border-solid">
            <h3 className="text-dark-2 xs:text-lg font-semibold">
              BCA - Bachelor of Computer Applications
            </h3>
            <p className="xs:text-base text-sm text-gray-600">
              University of Cambridge
            </p>
            <p className="text-sm xs:text-base text-gray-600">2004-2008</p>
          </div>
        </div>
      </Section>
      <EducationModal open={open} setOpen={setOpen}/>
    </>
  );
};

export default Education;
