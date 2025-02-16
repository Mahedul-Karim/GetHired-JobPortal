import { MapPin } from "lucide-react";
import React from "react";
import Heading from "../Heading";

const Location = () => {
  return (
    <div>
      <Heading>Location</Heading>
      <div className="my-3 p-3 bg-white rounded-lg w-full text-gray-1 flex items-center justify-between">
        <input
          type="text"
          className="bg-white text-sm focus:outline-none"
          placeholder={"Search Location"}
        />
        <MapPin className="size-5 text-dark-1" />
      </div>
    </div>
  );
};

export default Location;
