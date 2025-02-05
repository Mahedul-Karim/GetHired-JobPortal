import React from "react";
import Category from "./sidebar/filters/Category";
import Keywords from "./sidebar/filters/Keywords";
import Location from "./sidebar/filters/Location";
import JobType from "./sidebar/filters/JobType";
import DatePosts from "./sidebar/filters/DatePosts";

const Sidebar = () => {
  return (
    <>
      <aside className="flex flex-col gap-4 bg-primary-light-1 rounded-lg px-6 py-4 h-max order-2 md:order-1">
        <Category />
        <Keywords />
        <Location />
        <JobType />
        <DatePosts />
      </aside>
    </>
  );
};

export default Sidebar;
