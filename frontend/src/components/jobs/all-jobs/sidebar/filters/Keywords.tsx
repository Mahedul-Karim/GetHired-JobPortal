import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import { Search } from "lucide-react";

interface Props {
  setTitle: (val: string, query: string) => void;
}

const Keywords: React.FC<Props> = ({ setTitle }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitle(search, "title");
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div>
      <Heading>Keywords</Heading>
      <div className="my-3 p-3 bg-white rounded-lg w-full text-gray-1 flex items-center justify-between">
        <input
          type="text"
          className="bg-white text-sm focus:outline-none "
          placeholder={"job Title or Keyword"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="size-5 text-dark-1" />
      </div>
    </div>
  );
};

export default Keywords;
