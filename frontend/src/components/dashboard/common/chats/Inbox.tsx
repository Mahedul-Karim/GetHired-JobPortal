import React from "react";
import Header from "./inbox/Header";

import MessageInput from "./inbox/MessageInput";
import Messages from "./inbox/Messages";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Inbox: React.FC<Props> = ({ setOpen }) => {
  return (
    <div className="h-full overflow-clip flex flex-col justify-between">
      <Header setOpen={setOpen} />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default Inbox;
