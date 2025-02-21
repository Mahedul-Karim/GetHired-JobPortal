import React from "react";

interface Props{
    right?:boolean;
}

const Message:React.FC<Props> = ({right}) => {
  return (
    <div className={`flex items-end gap-2 xs:gap-4 ${right ? 'flex-row-reverse' : 'flex-row'}`}>
      <img
        src="https://thewebmax.org/jobzilla/images/user-avtar/pic4.jpg"
        alt=""
        className="size-8 xs:size-10 rounded-full object-cover"
      />
      <div className={`flex flex-col ${right ? 'items-end' : 'items-start'}`}>
        <p className="bg-[#d4e6ff]/[0.8] p-2 text-sm xs:text-base xs:p-4 rounded-lg text-dark-3 max-w-[400px]">
          Breaking the endless cycle of meaningless text message conversations
          starts with only talking to someone who offers interesting topics
          opinions.
        </p>
        <p className={`text-gray-1 text-xs xs:text-sm mt-1`}>20 seconds ago</p>
      </div>
    </div>
  );
};

export default Message;
