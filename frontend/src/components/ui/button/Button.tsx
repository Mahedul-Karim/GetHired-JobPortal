import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  type?: "button" | "submit";
  disabled?:boolean;
}

const buttonVariants = {
  default: "bg-primary text-white disabled:bg-primary-light-0",
  outline: "border border-solid border-primary text-primary",
};

const Button: React.FC<Props> = ({
  variant = "default",
  className,
  children,
  type = "button",
  disabled,
  ...props
}) => {
  const buttonStyles = buttonVariants[variant];

  return (
    <button
      className={`${buttonStyles} px-6 py-2 rounded-md font-medium w-full md:w-auto flex items-center justify-center ${className}`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
