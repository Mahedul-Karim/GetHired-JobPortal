import React from "react";

interface Props {
  children: React.ReactNode;
}

const Table: React.FC<Props> = ({ children }) => {
  return <table className="w-full">{children}</table>;
};

export default Table;
