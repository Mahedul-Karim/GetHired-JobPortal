import React, { useState } from "react";
import Conversations from "./Conversations";
import Inbox from "./Inbox";

const Chats = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg mt-10 overflow-clip h-[500px] border border-solid">
      <div
        className={`grid grid-flow-col h-full auto-cols-[100%]   transition-all duration-300 ${
          open ? "-translate-x-[100%] " : "translate-x-0"
        }`}
      >
        <Conversations open={open} setOpen={setOpen} />
        <Inbox setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Chats;
