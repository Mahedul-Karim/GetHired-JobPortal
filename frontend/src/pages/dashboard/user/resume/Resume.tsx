import React, { useEffect, useState } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import { useRequest } from "../../../../hooks/useRequest";
/**
 * 
 * @returns <div 
      className="relative p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
      style={{
        backgroundColor: '#f9f9ff',
        borderLeft: '4px solid #5049e1'
      }}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      <div className="flex items-center mb-4">
        <Lightbulb 
          size={32} 
          strokeWidth={1.5} 
          className="text-indigo-600 mr-3"
        />
        <h3 
          className="text-xl font-semibold text-gray-800" 
          style={{ color: '#5049e1' }}
        >
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <li 
            key={index} 
            className="text-gray-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-indigo-500 before:opacity-70"
          >
            <div className="flex items-center">
              <span 
                className="font-semibold mr-3 text-indigo-600"
                style={{ minWidth: '120px' }}
              >
                {suggestion.heading}
              </span>
              <span className="text-gray-600">
                {suggestion.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
 */
const Resume = () => {
  const { user, token } = useSelector((state: any) => state.user);

  const { success: onSuccess, error: onError } = useAlert();

  const queryClient = useQueryClient();

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

  const [haveResume, setHaveResume] = useState(false);

  useEffect(() => {
    if (data?.resume) {
      setResume(data?.resume);
      setHaveResume(true);
    }
  }, [data]);

  const { mutate, isPending: isLoading } = useRequest({
    success: (data: any) => {
      onSuccess(data.message);
      queryClient.invalidateQueries({ queryKey: ["user-resume"] });
    },
    error: (err: any) => {
      onError(err);
    },
  });

  const handleResumeGenerate = () => {
    const options: RequestInit = {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    options.method = "POST";
    options.body = JSON.stringify(resume);

    mutate({ endpoint: "resume", options });
  };

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
      <Headline
        headline={resume?.headline}
        setResume={setResume}
        haveResume={haveResume}
      />
      <Skills
        skills={resume?.skills}
        setResume={setResume}
        haveResume={haveResume}
      />
      <Experiences
        experiences={resume?.experiences}
        setResume={setResume}
        haveResume={haveResume}
      />
      <Education
        education={resume?.education}
        setResume={setResume}
        haveResume={haveResume}
      />
      <Projects
        projects={resume?.projects}
        setResume={setResume}
        haveResume={haveResume}
      />
      {!haveResume && (
        <div className="my-6">
          <Button
            style={{ width: "100%" }}
            variant="outline"
            onClick={handleResumeGenerate}
            disabled={isLoading}
          >
            {isLoading ? "Generating" : "Generate Resume"}
          </Button>
        </div>
      )}
      <pre></pre>
    </>
  );
};

export default Resume;
