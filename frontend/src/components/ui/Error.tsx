import React from "react";

const Error = ({ text }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/assets/vectors/error.jpg"
        alt=""
        className="mix-blend-multiply max-h-[400px]"
      />
      {text && (
        <p className="text-lg xs:text-xl font-medium text-gradient text-center">
          {text}
        </p>
      )}
    </div>
  );
};

export default Error;
