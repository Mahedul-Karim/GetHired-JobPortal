import React from "react";
import Headline from "../../../../components/dashboard/user/resume/Headline";
import Skills from "../../../../components/dashboard/user/resume/Skills";
import Experiences from "../../../../components/dashboard/user/resume/Experiences";
import Education from "../../../../components/dashboard/user/resume/Education";
import Projects from "../../../../components/dashboard/user/resume/Projects";
import Progress from "../../../../components/ui/Progress";
import Button from "../../../../components/ui/button/Button";

const Resume = () => {
  return (
    <>
      <Progress />
      <Headline />
      <Skills />
      <Experiences />
      <Education />
      <Projects />
      <div className="my-6">
        <Button style={{ width: "100%" }}>Generate Resume</Button>
      </div>
      <pre>
        
      </pre>
    </>
  );
};

export default Resume;
