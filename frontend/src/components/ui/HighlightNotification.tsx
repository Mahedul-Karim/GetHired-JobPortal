import React, { Fragment } from "react";

import {
  CheckCircle,
  XCircle,
  Mail,
  Briefcase,
  AlertTriangle,
  ReceiptText,
} from "lucide-react";

const highlightWords = ["message", "rejected", "approved", "hired", "declined","applied"];

const notificationStyles:any = {
  message: { color: "text-blue-600", icon: Mail },
  rejected: { color: "text-red-600", icon: XCircle },
  approved: { color: "text-green-600", icon: CheckCircle },
  hired: { color: "text-yellow-600", icon: Briefcase },
  declined: { color: "text-gray-600", icon: AlertTriangle },
  applied: { color: "text-lime-600", icon: ReceiptText },
};

const highlightNotification = (text: string) => {
  const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
  const match = text.match(regex);
  const lowerMatch = match ? match[0].toLowerCase() : null;

 
  if (!lowerMatch || !notificationStyles[lowerMatch]) {
    return <p>{text}</p>;
  }
  const { color, icon: Icon } = notificationStyles[lowerMatch];

  const highlightedText = text.split(regex).map((part, index) => {
    if (part.toLowerCase() === lowerMatch) {
      return (
        <span key={index} className={notificationStyles[lowerMatch].color}>
          {part}
        </span>
      );
    }
    return part;
  });

  return (
    <div className="flex items-start gap-3">
      <Icon className={`size-5 shrink-0 ${color}`} />
      <p>{highlightedText}</p>
    </div>
  );

  /**
   * 
  return text.split(regex).map((part, index) => {
    if (highlightWords.includes(part.toLowerCase())) {
      return (
        <span
          key={index}
          className={
            part.toLowerCase() === "message"
              ? "text-blue-600"
              : part.toLowerCase() === "rejected"
              ? "text-red-600"
              : part.toLowerCase() === "approved"
              ? "text-green-600"
              : part.toLowerCase() === "hired"
              ? "text-yellow-600"
              : part.toLowerCase() === "declined"
              ? "text-gray-600"
              : ""
          }
        >
          {part}
        </span>
      );
    }
    return part; 
  });
  */
};
export default highlightNotification;
