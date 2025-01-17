import React, { useEffect } from "react";

interface Props {
  ref: React.RefObject<HTMLElement | null>;
  onClick: () => void;
}

export const useOutsideClick = ({ ref, onClick }: Props) => {
  useEffect(() => {
    if (!ref) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as any)) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
};
