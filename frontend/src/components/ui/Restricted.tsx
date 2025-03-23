import React from "react";

interface Props {
  text: string;
}

const Restricted: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/assets/vectors/restricted.jpg"
        alt=""
        className="mix-blend-multiply max-h-[450px]"
      />
      <p className="text-lg xs:text-xl font-medium text-gradient text-center">{text}</p>
    </div>
  );
};

export default Restricted;
