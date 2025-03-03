import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "success" | "danger" | "warning" | 'info';
}

const badgeStyle: {
  success: string;
  danger: string;
  warning: string;
  info:string;
} = {
  success: "bg-green-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info:'bg-blue-500'
};

const Badge: React.FC<Props> = ({ children, type = "success" }) => {
  const bg = badgeStyle[type];

  return (
    <span className={`text-sm text-white ${bg} px-3 py-1 rounded-full`}>
      {children}
    </span>
  );
};

export default Badge;
