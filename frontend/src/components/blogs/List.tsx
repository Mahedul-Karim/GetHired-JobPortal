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
      <figure className="max-w-[100px] xs:max-w-[150px] sm:max-w-[250px] py-2 xs:py-0">
        <img
          src="https://thewebmax.org/jobzilla/images/blog/latest/bg1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg xs:-translate-y-5"
          style={{
            boxShadow: "0px 0px 10px rgba(80, 73, 225, 0.3)",
          }}
        />
      </figure>
      <div className="flex flex-col justify-center gap-1 sm:gap-3 py-2">
        <h4 className="text-xs sm:text-sm font-semibold text-dark-2">
          By <span className="text-primary">John Doe</span>
        </h4>
        <Link to={""} className="text-sm xs:text-base sm:text-xl font-semibold text-dark-1 line-clamp-2 hover:text-primary">How to convince recruiters and get your dream job</Link>
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
