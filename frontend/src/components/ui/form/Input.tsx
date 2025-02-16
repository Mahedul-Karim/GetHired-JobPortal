import { LucideIcon } from "lucide-react";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: LucideIcon;
  label?: string;
  placeholder: string;
  rounded?: boolean;
  containerClass?: string;
}

const Input: React.FC<Props> = ({
  Icon,
  label,
  placeholder,
  type,
  rounded = false,
  containerClass = "",
  ...props
}) => {
  return (
    <div className={containerClass}>
      {label && (
        <label className="font-medium mb-1 inline-block text-dark-2">
          {label}:
        </label>
      )}
      <div
        className={`flex items-center bg-primary-light-2 px-4 py-3 ${
          rounded ? "rounded-full" : "rounded-lg"
        } gap-2 w-full`}
      >
        {Icon && <Icon className="text-primary" />}
        <input
          type={type}
          className="bg-transparent w-full placeholder:text-gray-1 placeholder:text-sm focus:outline-none "
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
