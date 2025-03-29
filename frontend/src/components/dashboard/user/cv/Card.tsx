import React, { useEffect, useRef, useState } from "react";
import { formatDate } from "../../../../util/util";
import { Download, Eye, Trash2 } from "lucide-react";
import { useRequest } from "../../../../hooks/useRequest";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/slices/user";
import { useAlert } from "../../../../hooks/useAlert";

interface Props {
  name: string;
  createdAt: Date;
  url: string;
  token: string;
  cv: any;
  setCv: any;
}

const Card: React.FC<Props> = ({ name, createdAt, url, token, cv, setCv }) => {
  

  const queryClient = useQueryClient();

  const dispatch = useDispatch();

  const { error: onError } = useAlert();

  const { mutate } = useRequest({
    success(data: any) {
      dispatch(setUser({ user: data.user }));
      queryClient.invalidateQueries({ queryKey: ["user-cv"] });
    },
    error(message) {
      onError(message);
      queryClient.invalidateQueries({ queryKey: ["user-cv"] });
    },
  });

  const onDownload = async () => {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const fileName = url.split("/").pop();

    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", fileName as string);
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  const onView = () => {
    window.open(url, "_blank");
  };

  const onDelete = () => {
    setCv(null);
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    };

    mutate({ endpoint: "cv", options });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
      <div className="flex-grow w-full sm:w-auto text-center sm:text-left">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 ">
          {name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Created: {formatDate(createdAt)}
        </p>
      </div>
      <div className="flex space-x-2 sm:space-x-3">
        <button
          onClick={onDownload}
          className="p-2 rounded-full hover:bg-opacity-20 transition-colors"
          style={{ backgroundColor: "rgba(80, 73, 225, 0.1)" }}
          aria-label="Download CV"
        >
          <Download
            color="#5049e1"
            size={20}
            className="hover:scale-110 transition-transform"
          />
        </button>
        <button
          onClick={onView}
          className="p-2 rounded-full hover:bg-opacity-20 transition-colors"
          style={{ backgroundColor: "rgba(80, 73, 225, 0.1)" }}
          aria-label="View CV"
        >
          <Eye
            color="#5049e1"
            size={20}
            className="hover:scale-110 transition-transform"
          />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-full hover:bg-opacity-20 transition-colors"
          style={{ backgroundColor: "rgba(80, 73, 225, 0.1)" }}
          aria-label="Delete CV"
        >
          <Trash2
            color="#5049e1"
            size={20}
            className="hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
