import React from "react";
import Heading from "../Heading";
import { Search } from "lucide-react";

const Keywords = () => {
  return (
    <div>
      <Heading>Keywords</Heading>
      <div className="my-3 p-3 bg-white rounded-lg w-full font-medium text-gray-1 flex items-center justify-between">
        <input
          type="text"
          className="bg-white text-sm focus:outline-none "
          placeholder={"job Title or Keyword"}
        />
        <Search className="size-5 text-dark-1" />
      </div>
    </div>
  );
};

export default Keywords;
