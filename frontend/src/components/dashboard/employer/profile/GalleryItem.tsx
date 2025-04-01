import { Trash2 } from "lucide-react";
import React from "react";

interface Props {
  index: number;
  src: string;
  onDelete: (i: number) => void;
}

const GalleryItem: React.FC<Props> = ({ index, src, onDelete }) => {
  return (
    <div className="relative">
      <img src={src} alt="" className="rounded-lg object-cover aspect-[5/4]" />
      <div className="absolute top-2 right-2">
        <button
          className="bg-white text-primary p-1 rounded-lg "
          onClick={onDelete.bind(null, index)}
        >
          <Trash2 className="size-4 sm:size-5" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
