import React, { useRef, useState } from "react";
import NavSidebar from "./NavSidebar";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [runAnimation, setRunAnimation] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref: containerRef,
    onClick: () => setOpen(false),
  });

  return (
    <>
      <div
        className="flex md:hidden flex-col gap-2 justify-center size-8 cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
          setRunAnimation(true);
        }}
        ref={containerRef}
      >
        <span
          className={`h-[3px] w-[60%] bg-dark-2 block rounded-md origin-center ${
            open
              ? "animate-[openTop_500ms_forwards]"
              : runAnimation && "animate-[closeTop_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] w-full bg-dark-2 block rounded-md origin-center ${
            open
              ? "animate-[openMiddle_500ms_forwards]"
              : runAnimation && "animate-[closeMiddle_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] ml-auto w-[60%] bg-dark-2 block rounded-md origin-center ${
            open
              ? "animate-[openBottom_500ms_forwards]"
              : runAnimation && "animate-[closeBottom_500ms_forwards]"
          }`}
        />
      </div>
      <NavSidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileNav;
