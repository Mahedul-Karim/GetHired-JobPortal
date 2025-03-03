import React from "react";

interface Props {
  children: React.ReactNode;
}

const THead: React.FC<Props> = ({ children }) => {
  return (
    <thead>
      <tr className="[&>th]:text-sm [&>th]:text-left [&>th]:px-3 [&>th]:whitespace-nowrap [&>th]:py-4 border-b border-solid bg-gray-50 [&>th]:font-semibold">
        {children}
      </tr>
    </thead>
  );
};

export default THead;
