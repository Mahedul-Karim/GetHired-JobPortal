import React from "react";
import Heading from "../Heading";
import Checkbox from "../../../../ui/check/Checkbox";

const DatePosts = () => {
  return (
    <div>
      <Heading>Date Posts</Heading>
      <div className="my-3 space-y-2">
        <Checkbox name="date-posts" checkId="date-5" value="all" label="All" />
        <Checkbox name="date-posts" checkId="date-0" value="lastHour" label="Last Hour" />
        <Checkbox name="date-posts" checkId="date-1" value="last24Hours" label="Last 24 Hours" />
        <Checkbox name="date-posts" checkId="date-2" value="last7Days" label="Last 7 Days" />
        <Checkbox name="date-posts" checkId="date-3" value="last14Days" label="Last 14 Days" />
        <Checkbox name="date-posts" checkId="date-4" value="last30Days" label="Last 30 Days" />
      </div>
    </div>
  );
};

export default DatePosts;
