import React from "react";
import Category from "./sidebar/filters/Category";
import Keywords from "./sidebar/filters/Keywords";
import Location from "./sidebar/filters/Location";
import JobType from "./sidebar/filters/JobType";
import DatePosts from "./sidebar/filters/DatePosts";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 bg-primary-light-1 rounded-lg px-6 py-4 h-max">
      <Category />
      <Keywords />
      <Location />
      <JobType />
      <DatePosts />
    </div>
  );
};

export default Sidebar;
