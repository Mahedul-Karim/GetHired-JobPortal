import { LucideIcon } from "lucide-react";
import React from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  Icon?: LucideIcon;
  defaultValue: string;
  label?: string;
}

const Select: React.FC<Props> = ({ Icon, defaultValue, label, ...props }) => {
  return (
    <div>
      {label && (
        <label className={`font-medium mb-1 text-sm inline-block text-dark-2`}>
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 w-full bg-[#d4e6ff]/[0.4] rounded-lg px-4 py-3">
        {Icon && <Icon className="text-primary" />}
        <select
          className="bg-transparent w-full text-gray-1 placeholder:text-gray-1 placeholder:text-sm focus:outline-none"
          {...props}
        >
          <option>{defaultValue}</option>
          <option value="">Frontend Developer</option>
          <option value="">Backend Developer</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
