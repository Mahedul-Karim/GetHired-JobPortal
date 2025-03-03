import React from "react";
import Section from "../../../../components/dashboard/common/Section";
import Heading from "../../../../components/dashboard/common/Heading";
import Chats from "../../../../components/dashboard/common/chats/Chats";

const EmployerChats = () => {
  return (
    <>
      <Section>
        <Heading className="border-b border-solid pb-4">Chats</Heading>
        <Chats />
      </Section>
    </>
  );
};

export default EmployerChats;
