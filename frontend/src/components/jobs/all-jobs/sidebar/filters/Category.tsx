import React, { useState } from "react";
import Heading from "../Heading";
import Popover from "../../../../ui/popover/Popover";
import { useSearchParams } from "react-router";
import { CATEGORIES_DATA } from "../../../../../util/data";

interface Props {
  category: string;
  setCategory: (val: string) => void;
}

const Category: React.FC<Props> = ({ category, setCategory }) => {
  return (
    <div>
      <Heading>Category</Heading>
      <Popover
        defaultValue="Select Category"
        haveSearch
        searchPlaceholder="Search Category..."
        value={category}
        setValue={setCategory}
        data={CATEGORIES_DATA}
      />
    </div>
  );
};

export default Category;
