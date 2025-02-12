import React from "react";
import { Clock, MessageCircle, Heart } from "lucide-react";
import Badge from "../../../ui/Badge";

const Header = () => {
  return (
    <header className="mb-8">
      <section className="flex flex-col-reverse xs:flex-row gap-4 xs:gap-0 xs:items-center xs:justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <div>
            <Badge>Career</Badge>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm text-gray-1 font-medium">
            <Clock strokeWidth={2} className="size-4 md:size-[18px]" />2 days
            ago
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm text-gray-1 font-medium">
            <MessageCircle strokeWidth={2} className="size-4 md:size-[18px]" />0
            comments
          </div>
        </div>
        <div className="flex items-center gap-2 self-end xs:self-stretch">
          <button>
            <Heart strokeWidth={1.5} className="size-5 xs:size-[22px] stroke-black" />
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-5 xs:size-[22px] stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-5 xs:size-[22px] stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
              />
            </svg>
          </button>
        </div>
      </section>
      <section>
        <h1 className="my-6 text-2xl xs:text-3xl sm:text-4xl font-bold text-dark-2">Keeping Calm During Job Search</h1>
        <div className="flex items-center gap-4">
            <div>
                <img src="https://secure.gravatar.com/avatar/2bc37997317445ccbfeb8fcb5887233f?s=96&d=mm&r=g" alt="" className="size-10 xs:size-14 rounded-full object-cover"/>
            </div>
            <div>
                <p className="font-semibold text-dark-2 xs:text-base text-sm">Gordon Shumway</p>
                <p className="text-xs xs:text-sm text-gray-1">Joined: 20 Aug, 2040</p>
            </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
