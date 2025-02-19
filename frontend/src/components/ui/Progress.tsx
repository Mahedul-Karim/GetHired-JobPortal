import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Progress: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 justify-end ${className}`}>
      <span className="text-sm font-medium text-dark-2">Completed:</span>{" "}
      <div className="h-3 overflow-clip rounded-full bg-gray-300 relative max-w-[150px] w-full">
        <div
          className="absolute h-full rounded-full left-0 bg-gradient"
          style={{ width: `60%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
