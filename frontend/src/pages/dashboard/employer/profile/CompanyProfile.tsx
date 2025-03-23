import React from "react";
import Progress from "../../../../components/ui/Progress";
import Section from "../../../../components/dashboard/common/Section";
import Heading from "../../../../components/dashboard/common/Heading";
import LogoAndBanner from "../../../../components/dashboard/employer/profile/LogoAndBanner";
import BasicInfo from "../../../../components/dashboard/employer/profile/BasicInfo";
import Gallery from "../../../../components/dashboard/employer/profile/Gallery";
import SocialLinks from "../../../../components/dashboard/employer/profile/SocialLinks";
import { useSelector } from "react-redux";

const CompanyProfile = () => {
  const { user, token } = useSelector((state: any) => state.user);

  return (
    <>
      <Progress progress={user?.profileCompletion} />
      <Section>
        <Heading className="border-b border-solid pb-4">
          Logo and Banner
        </Heading>
        <LogoAndBanner user={user} token={token} />
      </Section>
      <Section>
        <Heading className="border-b border-solid pb-4">
          Basic Information
        </Heading>
        <BasicInfo user={user} token={token} />
      </Section>
      <Section>
        <Heading className="border-b border-solid pb-4">Photo Gallery</Heading>
        <Gallery />
      </Section>
      <Section>
        <Heading className="border-b border-solid pb-4">Social Network</Heading>
        <SocialLinks />
      </Section>
    </>
  );
};

export default CompanyProfile;
