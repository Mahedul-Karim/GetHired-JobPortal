import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children, className = "", style = {} }) => {
  return (
    <span
      className={`bg-primary-light-2 px-4 py-1 rounded-2xl font-medium text-primary text-xs xs:text-sm inline-block capitalize ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

export default Badge;
