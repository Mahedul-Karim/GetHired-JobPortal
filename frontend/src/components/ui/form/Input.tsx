import { LucideIcon } from "lucide-react";
import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: LucideIcon;
  label?: string;
  placeholder: string;
  rounded?: boolean;
  containerClass?: string;
  centerInput?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      Icon,
      label,
      placeholder,
      type,
      rounded = false,
      containerClass = "",
      centerInput = false,
      disabled = false,
      ...props
    }: Props,
    ref
  ) => {
    return (
      <div className={containerClass}>
        {label && (
          <label className="font-medium mb-1 inline-block text-dark-2">
            {label}:
          </label>
        )}
        <div
          className={`flex items-center ${
            centerInput ? "justify-center" : "justify-start"
          }  px-4 py-3 ${
            rounded ? "rounded-full" : "rounded-lg"
          } gap-2 w-full ${disabled ? "bg-[#F8F8F8]" : "bg-[#d4e6ff]/[0.4]"}`}
        >
          {Icon && <Icon className="text-primary" />}
          <input
            type={type}
            className="bg-transparent w-full placeholder:text-gray-1 placeholder:text-sm focus:outline-none "
            placeholder={placeholder}
            disabled={disabled}
            ref={ref as React.Ref<HTMLInputElement> | undefined}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
