import React from "react";
import Button from "../../ui/button/Button";

interface Props {
  src: string;
  avatar: any;
  setAvatar: React.Dispatch<React.SetStateAction<File | null>>;
  uploadImage: () => void;
  isPending: boolean;
}

const ProfileUpload: React.FC<Props> = ({
  src = "/assets/placeholder.jpg",
  avatar,
  setAvatar,
  uploadImage,
  isPending,
}) => {
  const imgSrc = avatar ? URL.createObjectURL(avatar) : src;

  const isCanUpload = avatar && avatar !== src;

  return (
    <div>
      <div className="size-24 md:size-32 relative">
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute bottom-0 right-0">
          <input
            type="file"
            id="profileImage"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setAvatar(e.target.files[0]);
              }
            }}
          />
          <label
            htmlFor="profileImage"
            className="border-2 border-solid border-primary p-0.5 rounded-full block cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5 md:size-6 fill-primary"
            >
              <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
              <path
                fillRule="evenodd"
                d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      {isCanUpload && (
        <div className="my-4">
          <Button variant="outline" onClick={uploadImage} disabled={isPending}>
            Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
