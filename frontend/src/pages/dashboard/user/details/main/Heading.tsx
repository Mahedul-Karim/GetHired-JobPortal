import React from "react";

interface Props {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="text-base sm:text-lg font-semibold text-black mt-6">
      {children}
    </h3>
  );
};

export default Heading;
