import React from "react";

const Comment = () => {
  return (
    <figure className="flex sm:flex-row flex-col sm:items-center gap-6">
      <div className="shrink-0">
        <img
          src="https://thewebmax.org/jobzilla/images/blog/comment/pic1.jpg"
          alt=""
          className="max-w-[100px] object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-dark-2 text-base sm:text-lg font-semibold">Richard Anderson</h3>
        <p className="text-dark-1 sm:text-base text-sm">
          No one rejects, dislikes, or avoids pleasure itself, because pleasure,
          but because those who do not know how to pursue.
        </p>
      </div>
    </figure>
  );
};

export default Comment;
