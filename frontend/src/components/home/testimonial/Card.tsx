import { Star } from "lucide-react";
import React from "react";

interface Props{
  review:string;
  image:string;
  userName:string;
  job:string;
}


const Card:React.FC<Props> = ({review,image,userName,job}) => {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col justify-center gap-3">
        <p className="text-gray-500">
          <em>
            {review}
          </em>
        </p>
        <p className="flex items-center gap-1">
          <Star className="fill-yellow-500 stroke-none size-5" />
          <Star className="fill-yellow-500 stroke-none size-5" />
          <Star className="fill-yellow-500 stroke-none size-5" />
          <Star className="fill-yellow-500 stroke-none size-5" />
          <Star className="fill-yellow-500 stroke-none size-5" />
        </p>
        <div className="flex items-center gap-2">
            <div className="block sm:hidden">
                <img src={image} alt="" className="size-12 xs:size-14 object-cover rounded-full"/>
            </div>
          <div>
            <h3 className="font-semibold xs:text-lg">{userName}</h3>
            <p className="text-gray-500 xs:text-base text-sm">{job}</p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="max-w-[290px] w-full min-h-[290px] max-h-[290px] h-full relative before:h-full before:w-full before:bg-primary-light-0 before:block before:absolute z-[1] before:-z-[1] before:rounded-lg before:top-[15px] before:left-[15px]">
          <img
            src={image}
            alt=""
            className="object-cover h-full rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
