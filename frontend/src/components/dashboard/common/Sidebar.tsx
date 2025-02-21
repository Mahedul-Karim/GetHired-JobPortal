import React, { useRef } from "react";
import Logo from "../../ui/Logo";
import { Link, useLocation } from "react-router";
import { LucideIcon } from "lucide-react";

interface Props {
  navItems: Array<{
    to: string;
    Icon: LucideIcon;
    label: string;
  }>;
}

const Sidebar: React.FC<Props> = ({
  navItems
}) => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  const handleBgHighlight = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (bgRef.current) {
      bgRef.current.style.top = `${e.currentTarget.offsetTop}px`;
    }

  };

  return (
    <aside className="h-full bg-primary-light-3 overflow-auto showScrollbar p-6">
      <div className="flex justify-center">
        <Logo />
      </div>
      <nav className="mt-16">
        <ul className="flex flex-col gap-1 mt-16 relative z-[1]">
          <div
            className={`absolute h-10 rounded-lg top-0 w-full bg-white transition-all duration-500 -z-[1]`}
            ref={bgRef}
          />
          {navItems.map((nav, i) => (
            <li
              className="px-4 rounded-lg h-10 flex items-center transition-all duration-500 hover:bg-white group"
              key={i}
              onClick={handleBgHighlight}
            >
              <Link
                to={nav.to}
                className={`flex items-center gap-2 h-full w-full  transition-all duration-500 group-hover:text-primary ${
                  location.pathname === nav.to ? "text-primary" : "text-gray-1"
                } `}
              >
                <nav.Icon
                  className={`size-5 transition-all duration-500 group-hover:text-primary ${
                    location.pathname === nav.to
                      ? "text-primary"
                      : "text-gray-1"
                  }`}
                  strokeWidth={1.7}
                />
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
