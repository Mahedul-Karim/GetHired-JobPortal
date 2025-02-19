import React from "react";
import Headline from "../../../../components/dashboard/user/resume/Headline";
import Skills from "../../../../components/dashboard/user/resume/Skills";
import Experiences from "../../../../components/dashboard/user/resume/Experiences";
import Education from "../../../../components/dashboard/user/resume/Education";
import Projects from "../../../../components/dashboard/user/resume/Projects";
import Progress from "../../../../components/ui/Progress";

const Resume = () => {
  return (
    <>
      <Progress />
      <Headline />
      <Skills />
      <Experiences />
      <Education />
      <Projects />
    </>
  );
};

export default Resume;
