import React from "react";
import Conversation from "./Conversation";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Conversations: React.FC<Props> = ({ setOpen }) => {
  return (
    <div className={`overflow-x-clip overflow-y-auto hideScrollbar h-full`}>
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
      <Conversation setOpen={setOpen} />
    </div>
  );
};

export default Conversations;
