import React from "react";
import Heading from "../../../jobs/all-jobs/sidebar/Heading";
import RecentBlog from "../../all-blogs/sidebar/RecentBlog";

const Sidebar = () => {
  return (
    <aside className="px-6 py-4 flex flex-col gap-4 h-max">
      <div>
        <Heading>Similar Blogs</Heading>
        <div className="my-3 space-y-5">
          <RecentBlog />
          <RecentBlog />
          <RecentBlog />
          <RecentBlog />
          <RecentBlog />
          <RecentBlog />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
