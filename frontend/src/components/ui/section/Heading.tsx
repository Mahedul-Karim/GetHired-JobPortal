import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-xl xs:text-[26px] font-semibold text-black ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
