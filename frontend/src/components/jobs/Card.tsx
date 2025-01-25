import React from "react";
import Button from "../ui/button/Button";
import { Clock, MapPin, Bookmark } from "lucide-react";
import { Link } from "react-router";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({ className = "", style = {} }) => {
  return (
    <div
      className={`bg-white h-full border border-solid rounded-md p-2 xs:p-4 max-w-[270px] ${className}`}
      style={style}
    >
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex xs:flex-row flex-col gap-2 xs:items-center justify-between">
          <p className="flex items-center gap-1 text-xs md:text-sm text-gray-1">
            <Clock strokeWidth={1.5} className="size-4 md:size-[18px]" />2 days
            ago
          </p>
          <p className="flex items-center gap-1 text-xs md:text-sm text-gray-1">
            <MapPin strokeWidth={1.5} className="size-4 md:size-[18px]" />
            Full Time
          </p>
        </div>
        <div className="flex xs:flex-row flex-col items-center gap-3 border-b border-solid pb-4">
          <div>
            <img
              src="https://thewebmax.org/jobzilla/images/home-6/featured-jobs/instagram.png"
              alt=""
              className="size-10 md:size-12 object-cover"
            />
          </div>
          <div>
            <h3 className="text-dark-2 text-center xs:text-left text-sm xs:text-base md:text-lg font-semibold">
              Instagram
            </h3>
            <p className="text-gray-1 text-xs md:text-sm">Washington USA</p>
          </div>
        </div>
        <div>
          <Link
            to={"#"}
            className="text-dark-1 text-base xs:text-lg md:text-xl hover:text-gradient transition-all duration-500 font-semibold"
          >
            Backed Developer
          </Link>
          <p className="mt-1 font-medium text-sm text-gray-1">
            <span className="text-primary font-semibold text-sm xs:text-lg">
              1200$
            </span>
            /month
          </p>
        </div>
        <div className="flex flex-col xs:flex-row xs:items-center justify-between mt-2 gap-2 xs:gap-4">
          <Button className="bg-primary-light-2 !text-primary hover:bg-primary hover:!text-white transition-all duration-500 md:text-base text-sm px-6">
            Details
          </Button>
          <Button
            variant="outline"
            className="border-gray-0 text-gray-1 px-3 "
          >
            <Bookmark
              strokeWidth={1.5}
              className="size-[18px] xs:size-[20px] md:size-[22px] fill-primary stroke-primary"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
