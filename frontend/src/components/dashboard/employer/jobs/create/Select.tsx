import { LucideIcon } from "lucide-react";
import React, { forwardRef } from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  Icon?: LucideIcon;
  defaultValue: string;
  label?: string;
  options: {
    label: string;
    value: string;
    image?: string;
  }[];
  disabled: boolean;
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ Icon, defaultValue, label, options = [], disabled, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label
            className={`font-medium mb-1 text-sm inline-block text-dark-2`}
          >
            {label}
          </label>
        )}
        <div
          className={`flex items-center gap-2 w-full ${
            disabled ? "bg-[#F8F8F8]" : "bg-[#d4e6ff]/[0.4]"
          }  rounded-lg px-4 py-3`}
        >
          {Icon && <Icon className="text-primary" />}
          <select
            className="bg-transparent w-full text-gray-1 placeholder:text-gray-1 placeholder:text-sm focus:outline-none"
            disabled={disabled}
            ref={ref}
            {...props}
          >
            <option>{defaultValue}</option>
            {options.length > 0 &&
              options.map((opt, i) => (
                <option value={opt.value} key={i}>
                  {opt.label}
                </option>
              ))}
          </select>
        </div>
      </div>
    );
  }
);

export default Select;
