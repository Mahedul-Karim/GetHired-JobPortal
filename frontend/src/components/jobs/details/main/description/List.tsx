import { CircleCheckBig } from "lucide-react";
import React from "react";

const List = () => {
  return (
    <div className="flex items-center gap-4">
      <CircleCheckBig className="text-primary size-4 xs:size-[18px] shrink-0"/>
      <p className="font-medium xs:text-base text-sm text-dark-1">
        Must be able to communicate with others to convey information
        effectively.
      </p>
    </div>
  );
};

export default List;
