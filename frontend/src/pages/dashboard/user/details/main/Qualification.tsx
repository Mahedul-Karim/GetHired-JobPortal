import React from "react";

const Qualification = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-1 text-sm xs:text-base">2012 to 2016</p>
      <h3 className="text-primary font-medium text-base xs:text-lg relative before:size-3 before:bg-primary before:absolute before:-left-12 before:rounded-full before:top-[6px] xs:before:top-[8px] after:w-5 after:h-0.5 after:-left-[26px] after:top-[11px] xs:after:top-[13px] after:absolute after:bg-primary after:rounded-full">
        Bluetech, Inc
      </h3>
      <h4 className="text-dark-2 font-medium xs:text-base text-sm">Senior PHP Developer</h4>
      <p className="text-dark-1 !leading-[30px] xs:text-base text-sm">
        One of the main areas that I work on with my clients is shedding these
        non-supportive beliefs and replacing them with beliefs that will help
        them to accomplish their desires.
      </p>
    </div>
  );
};

export default Qualification;
