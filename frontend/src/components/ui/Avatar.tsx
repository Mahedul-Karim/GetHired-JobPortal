import React from "react";
import { Link } from "react-router";

const Avatar = () => {
  return (
    <Link to={"/"}>
      <img
        src="https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png"
        alt=""
        className="size-10 rounded-full object-cover"
      />
    </Link>
  );
};

export default Avatar;
