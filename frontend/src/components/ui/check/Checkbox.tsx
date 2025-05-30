import { Check } from "lucide-react";
import React, { forwardRef } from "react";
import styles from "./checkbox.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checkId: string;
  value: string;
  label: string;
  name: string;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ checkId, value, label, name, ...props }, ref) => {
    return (
      <div className="flex items-center text-base text-gray-1 gap-3">
        <div className={`flex items-center ${styles["checkbox-wrapper-46"]}`}>
          <input
            type="radio"
            name={name}
            id={checkId}
            className={`${styles["inp-cbx"]}`}
            value={value}
            ref={ref}
            {...props}
          />
          <label htmlFor={checkId} className={styles.cbx}>
            <span>
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
  }
);

export default Checkbox;
