import React from "react";
import Spinner from "../loader/Spinner";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
  rounded?: boolean;
}

const buttonVariants = {
  default: "bg-primary text-white disabled:bg-primary-light-0",
  outline: "border border-solid border-primary text-primary disabled:border-primary-light-0 disabled:text-primary-light-0",
};

const Button: React.FC<Props> = ({
  variant = "default",
  className,
  children,
  type = "button",
  disabled,
  rounded,
  ...props
}) => {
  const buttonStyles = buttonVariants[variant];

  return (
    <button
      className={`${buttonStyles} px-6 py-2 ${
        rounded ? "rounded-full" : "rounded-md"
      } font-medium w-full md:w-auto text-sm sm:text-base flex items-center justify-center transition-all gap-2 duration-300 active:scale-95 ${className}`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {disabled && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
