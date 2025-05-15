import React from "react";
import Category from "./sidebar/filters/Category";
import Keywords from "./sidebar/filters/Keywords";
import Location from "./sidebar/filters/Location";
import JobType from "./sidebar/filters/JobType";
import DatePosts from "./sidebar/filters/DatePosts";
import { useSearchParams } from "react-router";
import { toCamelCase } from "../../../util/util";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const title = searchParams.get("title") || "";
  const jobLocation = searchParams.get("jobLocation") || "";
  const jobType = searchParams.get("jobType") || "all";

  const setCategory = (cat: string) => {
    if (cat === category) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }

    setSearchParams(searchParams);
  };

  const setJobType = (type: string) => {
    searchParams.set("jobType", type);

    setSearchParams(searchParams);
  };

  const setSearchQuery = (text: string, query: string) => {
    if (!text || text === "") {
      searchParams.delete(query);
    } else {
      searchParams.set(query, text);
    }

    setSearchParams(searchParams);
  };

  return (
    <>
      <aside className="flex flex-col gap-4 bg-primary-light-1 rounded-lg px-6 py-4 h-max order-2 md:order-1">
        <Category category={category} setCategory={setCategory} />
        <Keywords setTitle={setSearchQuery} />
        <Location setLocation={setSearchQuery} />
        <JobType setType={setJobType} />
        {/* <DatePosts /> */}
      </aside>
    </>
  );
};

export default Sidebar;
