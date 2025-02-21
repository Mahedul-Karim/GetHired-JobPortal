import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="h-[calc(500px_-_124px)] p-4 overflow-x-clip overflow-y-auto showScrollbar flex flex-col-reverse">
      <div className="flex flex-col gap-4">
        <Message />
        <Message right/>
      </div>
    </div>
  );
};

export default Messages;
