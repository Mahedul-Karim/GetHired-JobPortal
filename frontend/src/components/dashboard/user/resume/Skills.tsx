import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";

import { PencilRuler, X } from "lucide-react";
import Badge from "../../../ui/Badge";
import SkillsModal from "../../../ui/modals/resume/SkillsModal";

interface Props {
  skills: Array<string>;
  setResume: any;
}

const Skills: React.FC<Props> = ({ skills = [], setResume }) => {
  const [open, setOpen] = useState(false);

  const handleSkillDelete = (index: number) => {
    const data = [...skills];

    const newData = data.filter((_, i) => i !== index);

    setResume((prev: any) => ({ ...prev, skills: [...newData] }));
  };

  return (
    <>
      <Section className="mt-4">
        <div className="pb-2 border-b border-solid flex items-center justify-between">
          <Heading>Skills</Heading>
          <div>
            <button onClick={() => setOpen(true)}>
              <PencilRuler className="size-5 text-primary" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {skills.length > 0 &&
            skills.map((skill, i) => (
              <Badge
                className="font-[400] flex items-center justify-between gap-2"
                key={i}
              >
                {skill}{" "}
                <button onClick={handleSkillDelete.bind(null, i)}>
                  <X className="size-5" />
                </button>
              </Badge>
            ))}
        </div>
      </Section>
      <SkillsModal
        open={open}
        setOpen={setOpen}
        skills={skills}
        setResume={setResume}
      />
    </>
  );
};

export default Skills;
