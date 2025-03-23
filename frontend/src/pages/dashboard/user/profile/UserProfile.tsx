import React from "react";
import Section from "../../../../components/dashboard/common/Section";
import Heading from "../../../../components/dashboard/common/Heading";
import Info from "../../../../components/dashboard/user/profile/Info";
import SocialLinks from "../../../../components/dashboard/user/profile/SocialLinks";
import Progress from "../../../../components/ui/Progress";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <>
      <Progress progress={user?.userProfileCompletion || 0} />
      <Section>
        <Heading className="border-b border-solid pb-4">
          Basic Information
        </Heading>
        <Info user={user} />
      </Section>
      <Section>
        <Heading className="border-b border-solid pb-4">Social Links</Heading>
        <SocialLinks user={user}/>
      </Section>
    </>
  );
};

export default UserProfile;
