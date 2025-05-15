import React, { useEffect, useRef, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  haveSearch?: boolean;
  searchPlaceholder?: string;
  popoverClass?: string;
  value: string | number;
  setValue: any;
  data: {
    label: string;
    image?: string;
    value: string;
  }[];
}

const Popover: React.FC<Props> = ({
  defaultValue,
  haveSearch = false,
  searchPlaceholder,
  className,
  popoverClass = "",
  value,
  setValue,
  data = [],
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);

  const [filterData, setFilterData] = useState([...data]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (filterData.length === 0) return;

    if (filterText === "") {
      setFilterData([...data]);
      return;
    }

    const newData = [...data].filter((dat) =>
      dat.label.toLowerCase().includes(filterText?.toLowerCase())
    );

    setFilterData(newData);
  }, [filterText]);

  useOutsideClick({
    ref: containerRef,
    onClick: () => setOpen(false),
  });

  return (
    <div
      className={`flex items-center justify-between w-full bg-white border border-solid rounded-lg text-sm text-gray-1 p-3 font-medium cursor-pointer my-3 relative ${className}`}
      ref={containerRef}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      {value || defaultValue} <ChevronsUpDown className="size-4 text-dark-1" />{" "}
      <div
        className={`absolute top-[55px] z-[4] bg-white border border-solid left-0 w-full rounded-lg overflow-clip transition-all duration-300 ${
          open
            ? "-translate-y-0 opacity-1 visible"
            : "-translate-y-[10px] opacity-0 invisible"
        } ${popoverClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {haveSearch && (
          <div className="p-3">
            <input
              type="text"
              className="bg-primary-light-1 px-3 py-2 rounded-lg focus:outline-none w-full"
              placeholder={searchPlaceholder || ""}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
        )}
        <div>
          {filterData.length > 0 &&
            filterData.map((dat, i) => (
              <p
                className={`p-3 hover:bg-primary-light-2 transition-all duration-300 ${
                  value === dat.label ? "bg-primary-light-2" : "bg-white"
                } `}
                key={i}
                onClick={() => {
                  setValue(dat.label);
                  setOpen(false);
                }}
              >
                {dat.label}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Popover;
