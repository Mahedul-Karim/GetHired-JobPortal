import { Trash2 } from "lucide-react";
import React from "react";

const GalleryItem = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1726607424599-db0c41681494?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-lg object-cover aspect-[5/4]"
      />
      <div className="absolute top-2 right-2">
        <button className="bg-white text-primary p-1 rounded-lg ">
          <Trash2 className="size-4 sm:size-5" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
