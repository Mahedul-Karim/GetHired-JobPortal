import React, { useRef, useState } from "react";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import { EllipsisVertical, MapPin } from "lucide-react";
import Badge from "../../../common/Badge";
import DotMenu from "../../../../ui/DotMenu";

interface Props {
  setAbove?: boolean;
}

const TableRow: React.FC<Props> = ({ setAbove = false }) => {
  const [open, setOpen] = useState(false);

  const dropdownContainer = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref: dropdownContainer,
    onClick: () => {
      setOpen(false);
    },
  });

  return (
    <tr>
      <td>
        <div className="w-[200px]">
          <h2 className="text-primary font-medium  whitespace-normal">
            Frontend Developer
          </h2>
          <p className="flex gap-1 text-sm text-gray-1 mt-1 ">
            <MapPin className="size-4 shrink-0" />{" "}
            <span className="whitespace-normal">Munchen, Germany</span>
          </p>
        </div>
      </td>
      <td className="text-dark-1 text-sm">Frontend Developer</td>
      <td className="text-sm text-dark-1">
        <Badge type="info">Full Time</Badge>
      </td>
      <td>
        <p className="text-sm">500 Applied</p>
      </td>
      <td>
        <p className="text-sm">10 Aug, 2025</p>
      </td>
      <td>
        <Badge type="danger">Expired</Badge>
      </td>
      <td>
        <div className="relative" ref={dropdownContainer}>
          <button
            className="w-full flex justify-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            <EllipsisVertical />
          </button>
          {/* {open && (
            <DotMenu setAbove={setAbove}>
              <div className="transition-all duration-300 hover:bg-gray-50">
                <button className="flex items-center gap-2">
                  <CircleCheckBig className="size-4" /> Accept
                </button>
              </div>
              <div className="transition-all duration-300 hover:bg-gray-50">
                <button className="flex items-center gap-2">
                  <Ban className="size-4" /> Reject
                </button>
              </div>
              <div className="transition-all duration-300 hover:bg-gray-50">
                <button className="flex items-center gap-2">
                  <Eye className="size-4" /> View Profile
                </button>
              </div>
              <div className="transition-all duration-300 hover:bg-gray-50">
                <button className="flex items-center gap-2">
                  <FileUser className="size-4" /> View CV
                </button>
              </div>
              <div className="transition-all duration-300 hover:bg-gray-50">
                <button className="flex items-center gap-2">
                  <Trash className="size-4" /> Delete
                </button>
              </div>
            </DotMenu>
          )} */}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
