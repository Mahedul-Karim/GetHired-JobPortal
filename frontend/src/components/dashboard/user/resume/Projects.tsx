import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";
import { PencilRuler } from "lucide-react";
import Badge from "../../../ui/Badge";
import ProjectsModal from "../../../ui/modals/resume/ProjectsModal";

interface Props {
  projects: any[];
  setResume: any;
  haveResume: boolean;
  setNewResume: any;
}

const Projects: React.FC<Props> = ({
  projects = [],
  setResume,
  haveResume,
  setNewResume
}) => {
  const [open, setOpen] = useState(false);

  const formatUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;
  };

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
          {projects.length > 0 &&
            projects.map((project, i) => (
              <div className="space-y-2 py-4 border-b border-solid" key={i}>
                <h3 className="text-dark-2 xs:text-lg font-semibold">
                  {project?.name}
                </h3>
                <a
                  href={formatUrl(project?.projectLink)}
                  target="_blank"
                  className="xs:text-base text-sm text-primary underline !my-4 block"
                >
                  {project?.projectLink}
                </a>

                <div className="!mt-4 flex flex-wrap gap-4">
                  {project?.technologies?.length > 0 &&
                    project?.technologies?.map((tech: string, i: number) => (
                      <Badge className="font-[400]" key={i}>
                        {tech}
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </Section>
      <ProjectsModal
        open={open}
        setOpen={setOpen}
        projects={projects}
        setResume={setResume}
        haveResume={haveResume}
        setNewResume={setNewResume}
      />
    </>
  );
};

export default Projects;
