import React from "react";
import Map from "./Map";

const Location = () => {
  return (
    <div className="mt-8">
      <h3 className="text-base sm:text-lg font-semibold text-black mb-4">
        Location:
      </h3>
      <Map />
    </div>
  );
};

export default Location;
