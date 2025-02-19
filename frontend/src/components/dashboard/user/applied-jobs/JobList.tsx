import React from "react";
import Badge from "../../../ui/Badge";
import { Link } from "react-router";


interface Props{
  applied?:boolean;
}

const JobList:React.FC<Props> = ({applied=true}) => {
  return (
    <figure className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2 justify-between bg-white rounded-lg p-4">
      <div className="flex items-center gap-4">
        <div>
          <img
            src="https://thewebmax.org/jobzilla/images/jobs-company/pic1.jpg"
            alt=""
            className="rounded-lg max-w-[70px] xs:max-w-[90px] sm:max-w-[120px]"
            style={{
              boxShadow: "0px 0px 10px rgba(80, 73, 225, 0.3)",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to={`/jobs/hello`}
            className="line-clamp-2 text-dark-2 text-base sm:text-xl font-medium transition-colors duration-300 hover:text-gradient"
          >
            Senior Web Developer
          </Link>
          <p className="hidden xs:block text-xs sm:text-sm text-gray-500">
            1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
          </p>
          {applied && <p className="text-xs sm:text-sm text-gray-500">
            Applied at:{" "}
            <span className="font-medium text-primary">20 Aug, 2025</span>
          </p>}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center xs:items-stretch sm:flex-col justify-between">
        <div>
          <Badge>Full Time</Badge>
        </div>
        <p className="font-medium text-sm sm:text-base text-dark-2">
          $2500 <span className="text-sm text-primary">/ month</span>
        </p>
      </div>
    </figure>
  );
};

export default JobList;
