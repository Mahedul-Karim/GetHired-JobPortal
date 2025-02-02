import React from "react";
import { Link } from "react-router";


interface Props extends React.HTMLAttributes<HTMLDivElement>{
  src:string;
  label:string;
}

const Card:React.FC<Props> = ({src,label,className,style={}}) => {
  return (
    <div className={`bg-white border border-solid rounded-md overflow-clip max-w-[270px] flex flex-col items-center ${className}`} style={style}>
      <div className="max-h-[180px] h-full grid place-items-center">
        <img
          src={src}
          alt=""
          className="object-cover max-w-[125px] w-full "
          loading="lazy"
        />
      </div>
      <Link to={""} className="px-2 pb-4 text-sm xs:text-base lg:text-lg font-semibold text-dark-1 transition-all duration-300 hover:text-gradient">
        {label}
      </Link>
    </div>
  );
};

export default Card;
