import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../util/util";
import { useSearchParams } from "react-router";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPage = Math.ceil(160 / ITEMS_PER_PAGE);

  const [buttonArray, setButtonArray] = useState<any>([]);

  const activePage = +searchParams.get("page")! || 1;
  let prevPage = activePage - 2;
  let nextPage = activePage + 2;

  if (activePage === 1) {
    nextPage += 2;
  } else if (activePage === 2) {
    nextPage += 1;
  }

  if (activePage >= totalPage - 2) {
    prevPage = totalPage - 4;
  }

  const nextPageClick = () => {
    if (activePage === totalPage) return;
    searchParams.set("page", String(activePage + 1));
    setSearchParams(searchParams);
  };
  const prevPageClick = () => {
    if (activePage === 1) return;
    searchParams.set("page", String(activePage - 1));
    setSearchParams(searchParams);
  };

  const handleClick = (num: string) => {
    searchParams.set("page", num);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const elemArray = [];

    for (let pageNum = prevPage; pageNum <= nextPage; pageNum++) {
      if (pageNum > totalPage) {
        continue;
      }

      if (pageNum <= 0) {
        pageNum = 1;
      }

      const btn = (
        <button
          className={`size-6 sm:text-base text-sm sm:size-8 rounded-full hover:bg-primary hover:text-white hover:transition-all hover:duration-300 grid place-items-center text-black ${
            activePage === pageNum
              ? "bg-primary text-white"
              : "bg-transparent text-black"
          }`}
          key={pageNum}
          onClick={() => handleClick(String(pageNum))}
        >
          {pageNum}
        </button>
      );

      elemArray.push(btn);
      setButtonArray(elemArray);
    }
  }, [activePage]);

  return (
    <div className="flex items-center gap-1 sm:gap-2 mt-10 justify-center">
      {activePage > 1 && (
        <button
          className="size-6 sm:text-base text-sm sm:size-8 rounded-full hover:bg-primary hover:text-white hover:transition-all hover:duration-300 grid place-items-center"
          onClick={prevPageClick}
        >
          <ChevronLeft className="size-[20px] sm:size-[22px]" />
        </button>
      )}
      {activePage > 3 && prevPage !== 1 && (
        <>
          <button
            className="size-6 sm:text-base text-sm sm:size-8 rounded-full hover:bg-primary hover:text-white hover:transition-all hover:duration-300 grid place-items-center text-black"
            onClick={() => handleClick(String(1))}
          >
            1
          </button>
          <button className="size-6 sm:text-base text-sm sm:size-8 grid place-items-center text-black">
            ...
          </button>
        </>
      )}
      {buttonArray}

      {activePage <= totalPage - 3 && totalPage > 10 && (
        <>
          <button className="size-6 sm:text-base text-sm sm:size-8 grid place-items-center text-black">
            ...
          </button>
          <button
            className="size-6 sm:text-base text-sm sm:size-8 rounded-full hover:bg-primary hover:text-white hover:transition-all hover:duration-300 grid place-items-center text-black"
            onClick={() => handleClick(String(totalPage))}
          >
            {totalPage}
          </button>
        </>
      )}
      {activePage < totalPage && (
        <button
          className="size-6 sm:text-base text-sm sm:size-8 rounded-full hover:bg-primary hover:text-white hover:transition-all hover:duration-300 grid place-items-center"
          onClick={nextPageClick}
        >
          <ChevronRight className="size-[20px] sm:size-[22px]" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
