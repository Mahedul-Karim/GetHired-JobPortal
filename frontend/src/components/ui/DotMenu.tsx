import React from "react";

interface Props {
  children: React.ReactNode;
  setAbove?: boolean;
}

const DotMenu: React.FC<Props> = ({ children, setAbove }) => {
  return (
    <div
      className={`dot-menu bg-white border border-solid rounded-lg w-max whitespace-nowrap absolute  overflow-clip right-10 [&>div]:px-3 [&>div]:py-2  [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-solid z-[5] ${
        setAbove ? "-top-[145px]" : "top-5"
      }`}
    >
      {children}
    </div>
  );
};

export default DotMenu;
