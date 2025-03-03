import React from "react";

interface Props {
  children: React.ReactNode;
}

const TBody: React.FC<Props> = ({ children }) => {
  return (
    <tbody className="[&>tr>td]:px-3 [&>tr>td]:py-4 [&>tr>td]:whitespace-nowrap [&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-solid">
      {children}
    </tbody>
  );
};

export default TBody;
