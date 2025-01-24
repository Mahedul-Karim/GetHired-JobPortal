import React from "react";

interface Props {
  children: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children }) => {
  return <p className="text-dark-0 my-1">{children}</p>;
};

export default Paragraph;
