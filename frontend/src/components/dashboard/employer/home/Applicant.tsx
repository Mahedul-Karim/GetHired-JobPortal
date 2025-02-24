import React from "react";

import { MapPin, Eye, MailOpen, Trash2 } from "lucide-react";

const Applicant = () => {
  return (
    <figure className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-2 border border-solid rounded-lg p-2 sm:p-4">
      <div className="flex gap-3">
        <img
          src="https://thewebmax.org/jobzilla/images/candidates/pic1.jpg"
          alt=""
          className="size-12 xs:size-16 rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-dark-2 text-sm xs:text-base">Wanda Montgomery</h2>
          <p className="text-gray-1 text-xs xs:text-sm">Charted Accountant</p>
          <p className="text-xs xs:text-sm text-gray-1 flex items-center gap-1">
            <MapPin className="size-4"/> New York
          </p>
        </div>
      </div>
      <div className="sm:self-end flex items-center gap-4 sm:gap-1 sm:justify-between">
        <button className="p-1 rounded-lg text-primary bg-primary-light-1">
          <Eye className="size-4 sm:size-5"/>
        </button>
        <button className="p-1 rounded-lg text-primary bg-primary-light-1">
          <MailOpen className="size-4 sm:size-5"/>
        </button>
        <button className="p-1 rounded-lg text-primary bg-primary-light-1">
          <Trash2 className="size-4 sm:size-5"/>
        </button>
      </div>
    </figure>
  );
};

export default Applicant;
