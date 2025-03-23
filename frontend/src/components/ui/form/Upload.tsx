import React from "react";
import { MAX_FILE_UPLOAD_SIZE } from "../../../util/util";
import { FolderUp, Trash2 } from "lucide-react";
import { useAlert } from "../../../hooks/useAlert";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fileId: string | number;
  uploadType: "pdf" | "image";
  setFile: (val: File, size?: string) => void;
}

const Upload: React.FC<Props> = ({
  label,
  fileId,
  uploadType,
  setFile,
  ...props
}) => {
  const { error } = useAlert();

  const handleUploadedFile = (file: File) => {
    if (uploadType === "pdf" && file.type.startsWith("image")) {
      error("Please upload valid pdf type!!");
      return;
    }

    if (uploadType === "image" && !file.type.startsWith("image")) {
      error("Please provide a valid file type!!");
      return;
    }

    let fileSize = "";

    if (file.size >= 1024 * 1024) {
      fileSize = `${(file.size / (1024 * 1024)).toFixed(2)}mb`;
    } else {
      fileSize = `${(file.size / 1024).toFixed(2)}kb`;
    }

    if (file.size > MAX_FILE_UPLOAD_SIZE) {
      error("file is bigger then 10mb");
      return;
    }

    setFile(file, fileSize);
  };

  return (
    <div className="relative">
      {label && (
        <label className="font-medium mb-1 inline-block text-dark-2">
          {label}:
        </label>
      )}
      <input
        type="file"
        name=""
        id={`file-${fileId}`}
        className="absolute top-0 left-0 hidden"
        multiple
        onChange={(e) => {
          handleUploadedFile(e.target.files![0]);
          e.target.value = "";
        }}
        {...props}
      />
      <label
        htmlFor={`file-${fileId}`}
        className="flex min-h-[170px] rounded-lg flex-col items-center justify-center cursor-pointer bg-[#d4e6ff]/[0.4] border border-dashed border-primary-light-0 gap-1"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();

          const file = e.dataTransfer.files[0];

          handleUploadedFile(file);
        }}
      >
        <div className="bg-primary rounded-full p-2">
          <FolderUp className="text-white" />
        </div>
        <p className="text-sm text-dark-2 font-medium text-center">
          <span className="text-primary">Click Here</span> to upload file or
          drag and drop
        </p>
        <p className="text-sm font-medium text-gray-500">
          Maximum file size: {MAX_FILE_UPLOAD_SIZE / (1024 * 1024)}mb
        </p>
      </label>
    </div>
  );
};

export default Upload;
