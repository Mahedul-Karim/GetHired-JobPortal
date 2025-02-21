import React from "react";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Conversation: React.FC<Props> = ({ setOpen }) => {
  return (
    <div
      className="flex items-center justify-between transition-all duration-300 hover:bg-[#d4e6ff]/[0.4] hover:cursor-pointer p-2 xs:p-4"
      onClick={() => setOpen(true)}
    >
      <div className="flex items-center gap-2 xs:gap-4">
        <img
          src="https://thewebmax.org/jobzilla/images/user-avtar/pic4.jpg"
          alt=""
          className="size-10 xs:size-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-primary xs:text-base text-sm font-medium">
            Randall Henderson
          </h4>
          <p className="text-xs xs:text-sm text-gray-1">Hello World</p>
        </div>
      </div>
      <p className="hidden xs:block text-sm text-gray-1">2 days ago</p>
    </div>
  );
};

export default Conversation;
