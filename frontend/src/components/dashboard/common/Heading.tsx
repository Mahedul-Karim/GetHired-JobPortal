import { LucideIcon } from "lucide-react";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  Icon?: LucideIcon;
}

const Heading: React.FC<Props> = ({ children, className = "", Icon }) => {
  return (
    <h3
      className={`text-dark-2 font-medium flex items-center gap-2 ${className}`}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </h3>
  );
};

export default Heading;
