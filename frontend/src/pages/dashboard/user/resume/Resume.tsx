import React, { useState } from "react";
import Headline from "../../../../components/dashboard/user/resume/Headline";
import Skills from "../../../../components/dashboard/user/resume/Skills";
import Experiences from "../../../../components/dashboard/user/resume/Experiences";
import Education from "../../../../components/dashboard/user/resume/Education";
import Projects from "../../../../components/dashboard/user/resume/Projects";
import Button from "../../../../components/ui/button/Button";
import { useSelector } from "react-redux";
import Restricted from "../../../../components/ui/Restricted";
import { useData } from "../../../../hooks/useData";
import { useAlert } from "../../../../hooks/useAlert";
import Loader from "../../../../components/ui/loader/Loader";
import Error from "../../../../components/ui/Error";

const Resume = () => {
  const { user, token } = useSelector((state: any) => state.user);

  const { error: onError } = useAlert();

  const { data, isPending, error } = useData({
    key: ["user-resume"],
    endpoint: "resume",
    options: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  const [resume, setResume] = useState(data?.resume || {});
  const [updatedResume, setUpdatedResume] = useState<any>({});

  if (user && user?.userProfileCompletion < 100) {
    return <Restricted text="Complete your profile to create resume! ⚒" />;
  }

  if (isPending) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    onError(error.message);
    return <Error text={error.message} />;
  }

  return (
    <>
      <Headline headline={resume?.headline} setResume={setResume} />
      <Skills skills={resume?.skills} setResume={setResume} />
      <Experiences experiences={resume?.experiences} setResume={setResume} />
      <Education />
      <Projects />
      <div className="my-6">
        <Button style={{ width: "100%" }}>Generate Resume</Button>
      </div>
      <pre></pre>
    </>
  );
};

export default Resume;
