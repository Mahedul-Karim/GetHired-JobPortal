import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children, className }) => {
  return (
    <h4 className={`font-semibold text-xl text-dark-1 ${className}`}>
      {children}
    </h4>
  );
};

export default Heading;
