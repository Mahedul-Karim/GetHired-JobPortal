import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-[27px] font-semibold text-dark-2 ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
