import { LucideIcon } from "lucide-react";
import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  Icon?: LucideIcon;
  label?: string;
  placeholder: string;
}

const TextArea: React.FC<Props> = ({ Icon, label, placeholder,...props }) => {
  return (
    <div>
      {label && (
        <label className="font-medium mb-1 inline-block text-dark-2">
          {label}:
        </label>
      )}
      <div className={`flex bg-primary-light-2 px-4 py-3 rounded-lg gap-2`}>
        {Icon && <Icon className="text-primary" />}
        <textarea
          rows={4}
          className="bg-transparent w-full placeholder:text-gray-1 placeholder:text-sm focus:outline-none font-medium"
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextArea;
