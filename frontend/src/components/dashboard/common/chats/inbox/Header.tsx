import React from "react";
import { CornerDownRight } from "lucide-react";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setOpen }) => {
  return (
    <header className="h-[74px] bg-[#d4e6ff]/[0.4] flex items-center justify-between px-2 xs:px-4 gap-2">
      <div className="flex items-center gap-2 xs:gap-4">
        <div>
          <img
            src="https://thewebmax.org/jobzilla/images/user-avtar/pic4.jpg"
            alt=""
            className="size-10 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-primary xs:text-base text-sm font-medium">
            Randall Henderson
          </h4>
          <p className="text-xs xs:text-sm text-gray-1">Active Now</p>
        </div>
      </div>
      <div>
        <button onClick={() => setOpen(false)}>
          <CornerDownRight className="xs:size-6 size-5 text-primary"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
