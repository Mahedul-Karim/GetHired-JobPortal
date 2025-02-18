import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  gradientType: 1 | 2 | 3 | 4;
  Icon: LucideIcon;
  value: string;
  label: string;
}

const gradient: any = {
  1: "bg-gradient-to-br from-[rgb(117_150_252)] from-0% to-[rgb(180_121_255)] to-100%",
  2: "bg-gradient-to-br from-[rgb(26_168_237)] from-0% to-[rgb(7_244_172)] to-100%",
  3: "bg-gradient-to-br from-[rgb(252_207_110)] from-0% to-[rgb(254_102_98)] to-100%",
  4: "bg-gradient-to-br from-[rgb(70_198_251)] from-0% to-[rgb(46_66_159)] to-100%",

};

const StateCard: React.FC<Props> = ({ gradientType, Icon, value, label }) => {
  const gradientColor = gradient[gradientType];

  return (
    <figure
      className={`${gradientColor} flex items-center justify-between px-3 lg:px-4 py-4 rounded-lg`}
    >
      <div className="">
        <Icon className="size-10 lg:size-12 text-white" strokeWidth={1.3} />
      </div>
      <div className="text-center">
        <p className="text-white font-medium text-2xl">{value}</p>
        <p className="text-white">{label}</p>
      </div>
    </figure>
  );
};

export default StateCard;
