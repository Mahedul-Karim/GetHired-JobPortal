import React from "react";
import { Link } from "react-router";

const RecentBlog = () => {
  return (
    <article className="flex items-center gap-3">
      <figure className="shrink-0 basis-[60px] xs:basis-[70px]">
        <img
          src="https://thewebmax.org/jobzilla/images/blog/recent-blog/pic1.jpg"
          alt=""
          className="object-cover h-full w-full rounded-md"
        />
      </figure>
      <div>
        <p className="text-xs xs:text-sm text-primary font-medium">April 08, 2025</p>
        <Link to={""} className="line-clamp-2 text-sm xs:text-base font-medium text-gray-700">Equipment you can count on. People you can trust.</Link>
      </div>
    </article>
  );
};

export default RecentBlog;
