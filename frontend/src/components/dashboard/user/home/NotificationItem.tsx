import { LucideIcon } from "lucide-react";
import React from "react";
import highlightNotification from "../../../ui/HighlightNotification";

interface Props {
  text:string
}

const NotificationItem: React.FC<Props> = ({ text }) => {
  return (
    <figure className="flex items-center justify-between gap-2 py-4 border-b border-solid ">
      {highlightNotification(text)}

      <div>
        <button className="text-primary text-sm font-medium">
          Mark as read
        </button>
      </div>
    </figure>
  );
};

export default NotificationItem;
