import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-black mb-4">
        Comments
      </h2>
      <div className="mt-2 mb-6 flex flex-col gap-8">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <h2 className="text-xl font-semibold text-black mb-4">
        Leave a comment
      </h2>
      <CommentForm />
    </section>
  );
};

export default Comments;
