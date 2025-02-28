import React from "react";
import Upload from "../../../ui/form/Upload";
import GalleryItem from "./GalleryItem";
import Button from "../../../ui/button/Button";

const Gallery = () => {
  return (
    <div className="mt-4 space-y-4">
      <Upload fileId={"gallery"} uploadType="image" />
      <div className="grid-cols-2 grid xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4">
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />

      </div>
      <Button>Save Changes</Button>
    </div>
  );
};

export default Gallery;
