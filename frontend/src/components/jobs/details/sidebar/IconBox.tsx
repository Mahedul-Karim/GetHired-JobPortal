import React from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const IconBox: React.FC<Props> = ({ Icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Icon className="size-[20px] stroke-primary" />
      </div>
      <div>
        <h4 className="text-sm text-gray-1">{title}</h4>
        <p className="text-gray-700 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default IconBox;
