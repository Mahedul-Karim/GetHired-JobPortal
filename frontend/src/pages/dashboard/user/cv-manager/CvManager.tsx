import React from "react";
import { useSelector } from "react-redux";
import Restricted from "../../../../components/ui/Restricted";

const CvManager = () => {
  const { user } = useSelector((state: any) => state.user);

  if (user && user?.userProfileCompletion < 100) {
    return <Restricted text="Complete your profile to create cv! ⚒" />;
  }

  if (user && !user?.resume) {
    return <Restricted text="Complete your resume first to create cv! ⚒" />;
  }

  return <div>CvManager</div>;
};

export default CvManager;
