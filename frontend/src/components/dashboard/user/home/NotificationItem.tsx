import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  Icon: LucideIcon;
}

const NotificationItem: React.FC<Props> = ({ Icon }) => {
  return (
    <figure className="flex items-center justify-between gap-2 py-4 border-b border-solid ">
      <div className="flex  gap-3">
        <Icon className="size-5 text-green-700 shrink-0" />
        <p>
          Nikola tesla sent you a{" "}
          <span className="text-green-700">message</span>
        </p>
      </div>
      <div>
        <button className="text-primary text-sm font-medium">
          Mark as read
        </button>
      </div>
    </figure>
  );
};

export default NotificationItem;
