import React from "react";
import Heading from "../../../jobs/all-jobs/sidebar/Heading";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  return (
    <section>
      <Heading>Recent Blogs</Heading>
      <div className="my-3 space-y-5">
        <RecentBlog />
        <RecentBlog />
        <RecentBlog />
        <RecentBlog />
        <RecentBlog />
        <RecentBlog />
      </div>
    </section>
  );
};

export default RecentBlogs;
