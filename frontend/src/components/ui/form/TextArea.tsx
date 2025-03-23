import { LucideIcon } from "lucide-react";
import React, { forwardRef } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  Icon?: LucideIcon;
  label?: string;
  placeholder: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ Icon, label, placeholder, disabled = false, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="font-medium text-sm mb-1 inline-block text-dark-2">
            {label}:
          </label>
        )}
        <div
          className={`flex ${
            disabled ? "bg-[#F8F8F8]" : "bg-[#d4e6ff]/[0.4]"
          }  px-4 py-3 rounded-lg gap-2`}
        >
          {Icon && <Icon className="text-primary" />}
          <textarea
            rows={4}
            className="bg-transparent w-full text-gray-1 placeholder:text-gray-1 placeholder:text-sm focus:outline-none"
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);

export default TextArea;
