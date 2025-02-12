import React from "react";
import { Link } from "react-router";

const List = () => {
  return (
    <article
      className="rounded-lg px-3 sm:px-5 flex items-center gap-4"
      style={{
        boxShadow: "0px 0px 10px rgba(80, 73, 225, 0.3)",
      }}
    >
      <figure className="max-w-[100px] xs:max-w-[150px] sm:max-w-[250px] py-2 xs:py-0 relative">
        <img
          src="https://thewebmax.org/jobzilla/images/blog/latest/bg1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg xs:-translate-y-5"
          style={{
            boxShadow: "0px 0px 10px rgba(80, 73, 225, 0.3)",
          }}
        />
        <div className="bg-secondary  absolute top-3 xs:top-5 -left-3 sm:-left-5 whitespace-nowrap text-white font-medium py-1 xs:py-2 px-2 xs:px-3 sm:px-4 rounded-r-lg text-xs sm:text-sm before:size-0 before:absolute before:border-t-[10px] before:border-t-[#cc664b] before:border-l-0 before:border-l-transparent before:border-r-transparent before:border-r-[10px] before:bottom-[-10px] before:left-0">
          20 Aug, 2024
        </div>
      </figure>
      <div className="flex flex-col justify-center gap-1 sm:gap-3 py-2">
        <h4 className="text-xs sm:text-sm font-semibold text-dark-2">
          By <span className="text-primary">John Doe</span>
        </h4>
        <Link to={"/blog/hello-there"} className="text-sm xs:text-base sm:text-xl font-semibold text-dark-1 line-clamp-2 hover:text-primary">How to convince recruiters and get your dream job</Link>
        <p className="hidden md:block sm:text-base text-sm font-medium text-gray-600 line-clamp-2">
          New chip traps clusters of migrating tumor cells asperiortenetur,
          blanditiis odit.
        </p>
        <div>
          <button className="text-primary font-medium text-xs sm:text-sm">Read More</button>
        </div>
      </div>
    </article>
  );
};

export default List;
