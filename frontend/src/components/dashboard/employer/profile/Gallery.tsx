import React, { useState } from "react";
import Upload from "../../../ui/form/Upload";
import GalleryItem from "./GalleryItem";
import Button from "../../../ui/button/Button";
import { useAlert } from "../../../../hooks/useAlert";
import { useDispatch } from "react-redux";
import { useRequest } from "../../../../hooks/useRequest";
import { setUser } from "../../../../store/slices/user";

interface Props {
  user: any;
  token: string;
}

const Gallery: React.FC<Props> = ({ user, token }) => {
  const [galleryItems, setGalleryItems] = useState<any[]>(
    user?.photoGallery || []
  );

  const { success: onSuccess, error: onError, warning } = useAlert();

  const dispatch = useDispatch();

  const { mutate, isPending } = useRequest({
    success(data: any) {
      onSuccess(data.message);
      dispatch(setUser({ user: data.company }));
    },
    error(message) {
      onError(message);
    },
  });

  const setFile = (file: File) => {
    const items = [...galleryItems];

    items.push(file);

    setGalleryItems(items);
  };

  const onDelete = (index: number) => {
    const items = [...galleryItems];

    const newItems = items.filter((_, i) => i !== index);

    setGalleryItems(newItems);
  };

  const onUpload = () => {
    const userGallerys = user?.photoGallery;

    if (userGallerys?.length === galleryItems.length) {
      warning("Add or remove items from the gallery to upload!");

      return;
    }

    const formData = new FormData();

    galleryItems.forEach((item) => formData.append("galleryItems", item));

    const options = {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    mutate({ endpoint: "company", options });
  };

  return (
    <div className="mt-4 space-y-4">
      <Upload fileId={"gallery"} uploadType="image" setFile={setFile} />
      <div className="grid-cols-2 grid xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4">
        {galleryItems.length > 0 &&
          galleryItems.map((item, i) => (
            <GalleryItem
              key={i}
              index={i}
              src={item.url ? item.url : URL.createObjectURL(item)}
              onDelete={onDelete}
            />
          ))}
      </div>
      <Button onClick={onUpload} disabled={isPending}>
        Save Changes
      </Button>
    </div>
  );
};

export default Gallery;
