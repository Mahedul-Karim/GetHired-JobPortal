import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";

import { PencilRuler } from "lucide-react";
import Badge from "../../../ui/Badge";
import SkillsModal from "../../../ui/modals/resume/SkillsModal";

const Skills = () => {
  const [open, setOpen] = useState(false);

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
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            <Badge className="font-[400]">Finance</Badge>
            
        </div>
      </Section>
      <SkillsModal open={open} setOpen={setOpen}/>
    </>
  );
};

export default Skills;
