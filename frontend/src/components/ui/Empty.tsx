import React from "react";

interface Props {
  text?: string;
  height?: number;
}

const Empty: React.FC<Props> = ({ text, height = 400 }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src="/assets/vectors/empty.jpg"
        alt=""
        style={{ maxHeight: `${height}px` }}
        className="object-cover mix-blend-multiply"
      />
      {text && (
        <p className="text-lg xs:text-xl font-medium text-gradient text-center">
          {text}
        </p>
      )}
    </div>
  );
};

export default Empty;
