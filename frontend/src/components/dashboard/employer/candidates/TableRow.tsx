import {
  CircleCheckBig,
  EllipsisVertical,
  MapPin,
  Ban,
  Eye,
  FileUser,
  Trash,
} from "lucide-react";
import React, { useRef, useState } from "react";
import DotMenu from "../../../ui/DotMenu";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

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
        <div className="flex items-center gap-4">
          <img
            src="https://thewebmax.org/jobzilla/images/candidates/pic1.jpg"
            alt=""
            className="size-12 rounded-lg"
          />
          <div>
            <h2 className="text-primary font-medium">Wanda Montgomery</h2>
            <p className="flex items-center gap-1 text-sm text-gray-1 mt-1">
              <MapPin className="size-4" /> New York, USA
            </p>
          </div>
        </div>
      </td>
      <td className="text-sm text-dark-1">UI Designer</td>
      <td className="text-sm text-dark-1">15/06/2023</td>
      <td>
        <span className="text-sm text-white bg-green-500 px-3 py-1 rounded-full">
          Accepted
        </span>
      </td>
      <td>
        <div className="relative" ref={dropdownContainer}>
          <button
            className="w-full flex justify-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            <EllipsisVertical />
          </button>
          {open && (
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
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
