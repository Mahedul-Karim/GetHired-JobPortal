import { Search as SearchIcon } from "lucide-react";
import React from "react";
import Search from "../../../ui/filter/Search";
import Category from "./Category";
import RecentBlogs from "./RecentBlogs";

const Sidebar = () => {
  return (
    <aside className="bg-primary-light-1 rounded-lg px-6 py-4 flex flex-col gap-4">
      <Search
        placeholder="Search blogs"
        Icon={SearchIcon}
      />
      <Category />
      <RecentBlogs />
    </aside>
  );
};

export default Sidebar;
