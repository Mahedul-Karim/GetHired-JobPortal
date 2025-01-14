import React, { useState } from "react";
import NavSidebar from "./NavSidebar";

const MobileNav = () => {
  const [open, setOpen] = useState({
    clicked: false,
    runAnimation: false,
  });

  return (
    <>
      <div
        className="flex md:hidden flex-col gap-2 justify-center size-8 cursor-pointer"
        onClick={() =>
          setOpen((prev) => ({
            clicked: open.clicked ? false : true,
            runAnimation: true,
          }))
        }
      >
        <span
          className={`h-[3px] w-full bg-dark-2 block rounded-md origin-center ${
            open.clicked
              ? "animate-[openTop_500ms_forwards]"
              : open.runAnimation && "animate-[closeTop_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] w-full bg-dark-2 block rounded-md origin-center ${
            open.clicked
              ? "animate-[openMiddle_500ms_forwards]"
              : open.runAnimation && "animate-[closeMiddle_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] w-full bg-dark-2 block rounded-md origin-center ${
            open.clicked
              ? "animate-[openBottom_500ms_forwards]"
              : open.runAnimation && "animate-[closeBottom_500ms_forwards]"
          }`}
        />
      </div>
      <NavSidebar open={open} setOpen={setOpen}/>
    </>
  );
};

export default MobileNav;
