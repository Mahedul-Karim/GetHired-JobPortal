import React from "react";
import Popover from "../../ui/popover/Popover";
import Card from "../Card";
import { ChevronLeft } from "lucide-react";
import Pagination from "../../ui/pagination/Pagination";

const Main = () => {
  return (
    <main className="rounded-lg order-1 md:order-2">
      <div className="flex items-center justify-end gap-3">
        <p className="font-medium text-dark-1">Sort by: </p>
        <Popover defaultValue="Most Recent" className="max-w-[180px]" />
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <Pagination />
    </main>
  );
};

export default Main;
