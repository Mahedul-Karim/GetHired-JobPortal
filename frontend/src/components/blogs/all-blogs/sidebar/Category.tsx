import React from "react";
import Heading from "../../../jobs/all-jobs/sidebar/Heading";
import Checkbox from "../../../ui/check/Checkbox";

const Category = () => {
  return (
    <div>
      <div>
        <Heading>Category</Heading>
        <div className="my-3 space-y-2">
          <Checkbox checkId="category-0" value="all" label="All" />
          <Checkbox checkId="category-1" value="career" label="Career" />
          <Checkbox
            checkId="category-2"
            value="information"
            label="Information"
          />
          <Checkbox checkId="category-3" value="jobs" label="Jobs" />
          <Checkbox checkId="category-4" value="news" label="News" />
        </div>
      </div>
    </div>
  );
};

export default Category;
