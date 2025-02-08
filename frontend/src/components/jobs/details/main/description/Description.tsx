import React from "react";
import Requirements from "./Requirements";
import Responsibilities from "./Responsibilities";
import Location from "./Location";

const Description = () => {
  return (
    <>
      <h3 className="text-base sm:text-lg font-semibold text-black my-4">
        Job Description:
      </h3>
      <p className="sm:text-base text-sm text-dark-1 leading-[30px]">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur? At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi.
      </p>
      <Requirements />
      <Responsibilities />
      <Location />
    </>
  );
};

export default Description;
