import { Check } from "lucide-react";
import React from "react";

interface Props{
    checkId:string;
    value:string;
    label:string;
}

const Checkbox:React.FC<Props> = ({checkId,value,label}) => {
  return (
    <div className="flex items-center text-base text-gray-1 gap-3">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={checkId}
          className="absolute size-5 opacity-0 cursor-pointer"
          value={value}
        />
        <div
          className={`size-4 border border-solid border-gray-1 cursor-pointer rounded-full flex items-center justify-center`}
        >
          <Check className="size-3 text-primary invisible" strokeWidth={2.5} />
        </div>
      </div>
      <label htmlFor={checkId} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
