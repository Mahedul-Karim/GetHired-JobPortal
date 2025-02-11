import React from "react";
import Heading from "../../jobs/all-jobs/sidebar/Heading";
import { LucideIcon } from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  haveHeading?: boolean;
  heading?: string;
  placeholder: string;
  Icon: LucideIcon;
}

const Search: React.FC<Props> = ({
  haveHeading,
  heading,
  placeholder,
  Icon,
  ...props
}) => {
  return (
    <div>
      {haveHeading && <Heading>{heading}</Heading>}
      <div className="my-3 p-3 bg-white rounded-lg w-full font-medium text-gray-1 flex items-center justify-between">
        <input
          type="text"
          className="bg-white text-sm focus:outline-none "
          placeholder={placeholder}
          {...props}
        />
        <Icon className="size-5 text-dark-1" />
      </div>
    </div>
  );
};

export default Search;
