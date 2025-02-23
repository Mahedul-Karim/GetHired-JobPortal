import React from "react";
import Heading from "./Heading";

const Description = () => {
  return (
    <>
      <Heading>About Me</Heading>
      <p className="sm:text-base text-sm text-dark-1 mt-2 !leading-[30px]">
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
    </>
  );
};

export default Description;
