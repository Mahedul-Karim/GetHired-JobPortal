import React, { useState } from "react";
import Heading from "../../../../components/dashboard/common/Heading";
import Section from "../../../../components/dashboard/common/Section";
import Chats from "../../../../components/dashboard/common/chats/Chats";

const Chat = () => {

  return (
    <Section>
      <Heading className="border-b border-solid pb-4">Chats</Heading>
      <Chats />
    </Section>
  );
};

export default Chat;
