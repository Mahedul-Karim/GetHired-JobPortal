import React from "react";
import Avatar from "../../../components/ui/Avatar";

interface Props {
  open: boolean;
  runAnimation: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRunAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({
  setOpen,
  setRunAnimation,
  open,
  runAnimation,
}) => {
  return (
    <header className="bg-white shadow-md h-[70px] flex items-center justify-between px-6">
      <div
        className="flex flex-col gap-2 justify-center size-8 cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
          setRunAnimation(true);
        }}
      >
        <span
          className={`h-[3px] w-[60%] bg-primary block rounded-md origin-center ${
            open
              ? "animate-[openTop_500ms_forwards]"
              : runAnimation && "animate-[closeTop_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] w-full bg-primary block rounded-md origin-center ${
            open
              ? "animate-[openMiddle_500ms_forwards]"
              : runAnimation && "animate-[closeMiddle_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] ml-auto w-[60%] bg-primary block rounded-md origin-center ${
            open
              ? "animate-[openBottom_500ms_forwards]"
              : runAnimation && "animate-[closeBottom_500ms_forwards]"
          }`}
        />
      </div>
      <Avatar />
    </header>
  );
};

export default Header;
