import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";
import { PencilRuler } from "lucide-react";
import Badge from "../../../ui/Badge";
import ProjectsModal from "../../../ui/modals/resume/ProjectsModal";

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section className="mt-4">
        <div className="pb-2 border-b border-solid flex items-center justify-between">
          <Heading>Projects</Heading>
          <div>
            <button onClick={() => setOpen(true)}>
              <PencilRuler className="size-5 text-primary" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="space-y-2 py-4 border-b border-solid">
            <h3 className="text-dark-2 xs:text-lg font-semibold">
              Full Stack e-commerce website
            </h3>
            <a
              href=""
              target="_blank"
              className="xs:text-base text-sm text-primary underline !my-4 block"
            >
              www.google.com
            </a>
            <div className="!mt-4 flex flex-wrap gap-4">
              <Badge className="font-[400]">React Js</Badge>
              <Badge className="font-[400]">Express Js</Badge>
              <Badge className="font-[400]">Node Js</Badge>
              <Badge className="font-[400]">MongoDB</Badge>
              <Badge className="font-[400]">Mongoose</Badge>
            </div>
          </div>
        </div>
      </Section>
      <ProjectsModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Projects;
