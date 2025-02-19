import React from "react";
import Section from "../../../../components/dashboard/common/Section";
import Heading from "../../../../components/dashboard/common/Heading";
import Info from "../../../../components/dashboard/user/profile/Info";
import SocialLinks from "../../../../components/dashboard/user/profile/SocialLinks";
import Progress from "../../../../components/ui/Progress";

const UserProfile = () => {
  return (
    <>
    <Progress />
      <Section>
        <Heading className="border-b border-solid pb-4">
          Basic Information
        </Heading>
        <Info />
      </Section>
      <Section>
        <Heading className="border-b border-solid pb-4">Social Links</Heading>
        <SocialLinks />
      </Section>
    </>
  );
};

export default UserProfile;
