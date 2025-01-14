import React from "react";
import { createPortal } from "react-dom";
import Nav from "./Nav";

interface Props {
  open: {
    clicked: boolean;
    runAnimation: boolean;
  };
  setOpen: ({
    clicked,
    runAnimation,
  }: {
    clicked: boolean;
    runAnimation: boolean;
  }) => void;
}

const NavSidebar: React.FC<Props> = ({ open }) => {
  const sidebar = (
    <div
      className={`${
        open.clicked ? "visible translate-x-0" : "invisible -translate-x-[100%]"
      } fixed top-0 left-0 w-[70%] bg-white h-screen border-r border-solid border-gray-2 transition-all duration-300`}
    >
      <Nav className="h-full py-8 px-4" />
    </div>
  );

  return createPortal(sidebar, document.body);
};

export default NavSidebar;
