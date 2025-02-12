import { Check } from "lucide-react";
import React from "react";

interface Props {
  checkId: string;
  value: string;
  label: string;
  name:string;
}

const Checkbox: React.FC<Props> = ({ checkId, value, label,name }) => {
  return (
    <div className="flex items-center text-base text-gray-1 gap-3">
      <div className="flex items-center checkbox-wrapper-46">
        <input type="radio" name={name} id={checkId} className="inp-cbx" value={value}/>
        <label htmlFor={checkId} className="cbx">
          <span >
            <svg viewBox="0 0 12 10" className="size-2.5">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
        </label>
        
      </div>
      <label htmlFor={checkId} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
