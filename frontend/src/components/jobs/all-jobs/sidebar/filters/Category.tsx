import React from "react";
import Heading from "../Heading";
import Popover from "../../../../ui/popover/Popover";

const Category = () => {
  return (
    <div>
      <Heading>Category</Heading>
      <Popover
        defaultValue="Select Category"
        haveSearch
        searchPlaceholder="Search Category..."
      />
    </div>
  );
};

export default Category;
