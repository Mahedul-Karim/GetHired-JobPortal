import React from "react";

const highlightWords = ["message", "rejected", "approved", "hired", "declined"];

const HighlightNotification = (text: string) => {
  const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");

  return text.split(regex).map((part, index) => {
    if (highlightWords.includes(part.toLowerCase())) {
      return (
        <span
          key={index}
          className={
            part.toLowerCase() === "message"
              ? "text-blue-600 font-semibold"
              : part.toLowerCase() === "rejected"
              ? "text-red-600 font-semibold"
              : part.toLowerCase() === "approved"
              ? "text-green-600 font-semibold"
              : part.toLowerCase() === "hired"
              ? "text-yellow-600 font-semibold"
              : part.toLowerCase() === "declined"
              ? "text-gray-600 font-semibold"
              : ""
          }
        >
          {part}
        </span>
      );
    }
    return part; 
  });
};
export default HighlightNotification;
