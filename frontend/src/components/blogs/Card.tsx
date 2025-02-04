import React from "react";
import Badge from "../ui/Badge";
import { Link } from "react-router";

const Card = () => {
  return (
    <article className="bg-white overflow-clip rounded-lg h-full">
      <div>
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="max-h-[190px] w-full object-cover"
        />
        
      </div>
      <div className="p-2 xs:p-4 flex flex-col gap-3">
        <div>
          <Badge>career</Badge>
        </div>
        <Link
          to={""}
          className="text-dark-0 xs:text-base text-sm md:text-lg leading-6 transition-all duration-300 hover:text-primary font-semibold line-clamp-2"
        >
          How To Find the Job that Fits You the Most
        </Link>
        <hr />
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/testimonial1.avif"
              alt=""
              className="size-9 sm:size-11 object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">John Doe</h3>
            <p className="text-gray-500 text-xs sm:text-sm">2 days ago</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
