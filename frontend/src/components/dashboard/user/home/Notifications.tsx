import React from "react";
import { Mail } from "lucide-react";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div className="mt-6 flex flex-col max-w-[480px]">
      <NotificationItem  Icon={Mail}/>
      <NotificationItem  Icon={Mail}/>
      <NotificationItem  Icon={Mail}/>
      <NotificationItem  Icon={Mail}/>
    </div>
  );
};

export default Notifications;
