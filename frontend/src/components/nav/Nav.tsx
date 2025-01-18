import { Link, useLocation } from "react-router";
import { NAV_DATA } from "../../util/data";
import Avatar from "../ui/Avatar";
import Button from "../ui/button/Button";

interface Props extends React.HTMLAttributes<HTMLElement> {
  onClick?: (val: any) => void;
}

const Nav: React.FC<Props> = ({ className, onClick }) => {
  const location = useLocation();

  return (
    <div
      className={`flex flex-col md:flex-row items-center md:w-[60%] justify-between ${className}`}
    >
      <ul className="flex flex-col w-full md:w-auto md:flex-row items-center gap-4">
        {NAV_DATA.map((nav) => (
          <li
            key={nav.id}
            className="w-full md:w-auto"
            onClick={() => {
              if (!onClick) return;

              onClick(false);
            }}
          >
            <Link
              to={nav.to}
              className={`transition-all flex rounded-md md:rounded-none items-center justify-center hover:bg-primary md:hover:bg-transparent hover:text-white w-full md:w-auto duration-300 md:hover:text-primary relative p-2 md:before:absolute md:before:bottom-0 md:before:left-0 md:before:h-[2px]  md:before:bg-primary md:before:transition-all md:before:duration-300 md:hover:before:w-full font-semibold ${
                location.pathname === nav.to
                  ? "bg-primary text-white md:bg-transparent md:text-primary md:before:w-full"
                  : "text-dark-2 md:before:w-[0px] md:[&:not(:hover)]:before:w-0 md:[&:not(:hover)]:before:left-[auto] md:[&:not(:hover)]:before:right-0"
              }`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-3 w-full md:w-auto">
        {/* <Avatar /> */}
        <Button
          onClick={() => {
            if (!onClick) return;

            onClick(false);
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Nav;
