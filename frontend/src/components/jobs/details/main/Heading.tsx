import { MapPin } from "lucide-react";
import React from "react";

const Heading = () => {
  return (
    <section className="flex flex-col mt-4 gap-1">
      <h1 className="text-xl sm:text-2xl font-semibold text-dark-1">
        Junior Frontend Developer
        <span className="text-sm text-primary"> / 1 Day Ago</span>
      </h1>
      <p className="flex items-center gap-1 sm:text-base text-sm text-gray-1">
        <MapPin className="size-[16px]" /> 363-1385 Sunset Blvd Los Angeles, CA
        90026, USA
      </p>
      <h2 className="font-semibold sm:text-base text-sm text-[rgb(23_23_29)]">
        $2000 - $2500<span className="text-sm text-primary"> / month</span>
      </h2>
    </section>
  );
};

export default Heading;
