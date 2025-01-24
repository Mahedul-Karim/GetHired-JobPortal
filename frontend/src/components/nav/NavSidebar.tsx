import React, { useRef } from "react";
import { createPortal } from "react-dom";
import Nav from "./Nav";

interface Props {
  open: boolean;
  setOpen: (prev: boolean) => void;
}

const NavSidebar: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "visible translate-x-0" : "invisible -translate-x-[100%]"
      } fixed top-0 left-0 w-[70%] bg-white h-[100dvh] overflow-y-auto border-r border-solid border-gray-2 transition-all duration-500 z-[6]`}
    >
      <Nav className="h-full py-8 px-4" onClick={setOpen} />
    </div>
  );
};

export default NavSidebar;
