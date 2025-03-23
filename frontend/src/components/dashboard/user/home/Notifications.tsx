import React, { useState } from "react";
import { Mail } from "lucide-react";
import NotificationItem from "./NotificationItem";
import Empty from "../../../ui/Empty";

interface Props {
  notifications: {
    userId: string;
    message: string;
    type: string;
    isRead: boolean;
    createdAt: Date;
  }[];
}

const Notifications: React.FC<Props> = ({ notifications = [] }) => {
  const [data, setData] = useState([...notifications]);

  return (
    <div className="mt-6 flex flex-col max-w-[480px]">
      {data.length > 0 ? (
        data.map((not, i) => (
          <NotificationItem text="Nikola Tesla sent you a message" key={i} />
        ))
      ) : (
        <Empty text="No notifications found!"/>
      )}
    </div>
  );
};

export default Notifications;
