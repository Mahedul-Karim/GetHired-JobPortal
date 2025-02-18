import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface Props {
  containerClass?: string;
  modalClass?: string;
  modalTitle?: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({
  containerClass = "",
  modalClass = "",
  modalTitle = "",
  children,
  open,
  setOpen,
}) => {
  const modalElement = (
    <div
      className={`fixed inset-0 bg-black/[0.4] z-[10] grid place-items-center transition-all duration-500 ${
        open ? "visible" : "invisible"
      } ${containerClass}`}
      onClick={()=>setOpen(false)}
    >
      <div
        className={`max-h-[80vh] overflow-y-auto overflow-x-clip bg-white w-full max-w-[500px] rounded-lg showScrollbar transition-all duration-500 ${modalClass} ${
          open ? "opacity-1 translate-y-0" : "-translate-y-2.5 opacity-0"
        }`}
        onClick={(e)=>e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-solid">
          <h2 className="text-lg font-semibold text-dark-2">{modalTitle}</h2>
          <button onClick={()=>setOpen(false)}>
            <X />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
};

export default Modal;
