import React from "react";
import { useSelector } from "react-redux";

const Avatar = () => {
  const { user } = useSelector((state: any) => state.user);

  const isUser = user?.accountType === "candidate" ? true : false;

  const src = isUser ? user?.profilePic?.url : user?.companyLogo?.url;

  return (
    <div>
      <img
        src={src ? src : "/assets/placeholder.jpg"}
        alt=""
        className="size-10 rounded-full object-cover"
      />
    </div>
  );
};

export default Avatar;
