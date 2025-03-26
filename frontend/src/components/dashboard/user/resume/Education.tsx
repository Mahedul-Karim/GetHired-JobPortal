import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";
import { PencilRuler } from "lucide-react";
import EducationModal from "../../../ui/modals/resume/EducationModal";

interface Props {
  education: any[];
  setResume: any;
  haveResume: boolean;
  setNewResume: any;
  isUpdating: boolean;
  updateResume: any;
}

const Education: React.FC<Props> = ({
  education = [],
  setResume,
  haveResume,
  setNewResume,
  isUpdating,
  updateResume,
}) => {
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
          {education.length > 0 &&
            education.map((edu, i) => (
              <div className="space-y-2 py-4 border-b border-solid" key={i}>
                <h3 className="text-dark-2 xs:text-lg font-semibold">
                  {edu?.degree}
                </h3>
                <p className="xs:text-base text-sm text-gray-600">
                  {edu?.university}
                </p>
                <p className="text-sm xs:text-base text-gray-600">
                  {new Date(edu?.startDate).getFullYear()}-
                  {new Date(edu?.endDate).getFullYear()}
                </p>
              </div>
            ))}
        </div>
      </Section>
      <EducationModal
        open={open}
        setOpen={setOpen}
        education={education}
        setResume={setResume}
        haveResume={haveResume}
        setNewResume={setNewResume}
        isUpdating={isUpdating}
        updateResume={updateResume}
      />
    </>
  );
};

export default Education;
