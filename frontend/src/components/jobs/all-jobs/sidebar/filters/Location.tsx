import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import Heading from "../Heading";

interface Props {
  setLocation: (val: string, query: string) => void;
}

const Location: React.FC<Props> = ({ setLocation }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocation(search, "jobLocation");
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div>
      <Heading>Location</Heading>
      <div className="my-3 p-3 bg-white rounded-lg w-full text-gray-1 flex items-center justify-between">
        <input
          type="text"
          className="bg-white text-sm focus:outline-none"
          placeholder={"Search Location"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MapPin className="size-5 text-dark-1" />
      </div>
    </div>
  );
};

export default Location;
