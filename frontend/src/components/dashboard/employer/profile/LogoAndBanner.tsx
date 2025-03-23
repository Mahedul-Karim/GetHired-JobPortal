import React, { useState } from "react";
import ProfileUpload from "../../common/ProfileUpload";
import Upload from "../../../ui/form/Upload";
import { Trash2 } from "lucide-react";
import { useRequest } from "../../../../hooks/useRequest";
import { useAlert } from "../../../../hooks/useAlert";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/slices/user";
import Button from "../../../ui/button/Button";

interface Props {
  user: any;
  token: string;
}

const LogoAndBanner: React.FC<Props> = ({ user, token }) => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  const haveBanner = user?.companyBanner?.url || null;

  const { success: onSuccess, error: onError } = useAlert();

  const dispatch = useDispatch();

  const handleUploadSuccess = (data: any, file: any, setFile: any) => {
    onSuccess(data.message);
    dispatch(setUser({ user: data.company }));
    if (file) {
      setFile(null);
    }
  };

  const { mutate, isPending } = useRequest({
    success: (data: any) => {
      handleUploadSuccess(data, avatar, setAvatar);
    },
    error: (err: any) => {
      onError(err);
    },
  });
  const { mutate: mutateBanner, isPending: isLoading } = useRequest({
    success: (data: any) => {
      handleUploadSuccess(data, banner, setBanner);
    },
    error: (err: any) => {
      onError(err);
    },
  });

  const uploadLogo = () => {
    const formData = new FormData();

    formData.append("avatar", avatar as Blob);

    const options: RequestInit = {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    mutate({ endpoint: "company", options });
  };

  const setFile = (file: File) => {
    setBanner(file);
  };

  const deleteFile = () => {
    setBanner(null);
  };

  const uploadBanner = () => {
    const formData = new FormData();
    formData.append("banner", banner as Blob);

    const options: RequestInit = {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    mutateBanner({ endpoint: "company", options });
  };

  return (
    <div className="mt-4">
      <div>
        <ProfileUpload
          src={user?.companyLogo?.url}
          avatar={avatar}
          setAvatar={setAvatar}
          uploadImage={uploadLogo}
          isPending={isPending}
        />
      </div>
      <div className="my-4">
        <h3 className="font-medium mb-1">Banner Image:</h3>
        <Upload fileId={"banner"} uploadType="image" setFile={setFile} />
        {(banner || haveBanner) && (
          <div className="my-2 relative">
            <img
              src={
                haveBanner ? haveBanner : URL.createObjectURL(banner as Blob)
              }
              alt=""
              className="rounded-lg object-cover max-h-[250px] w-full"
            />
            {banner && (
              <>
                <div className="absolute top-4 right-4">
                  <button
                    className="p-1 xs:p-2 bg-primary-light-1 rounded-lg text-primary"
                    onClick={deleteFile}
                  >
                    <Trash2 className="sm:size-6 size-4 xs:size-5" />
                  </button>
                </div>
                <Button
                  variant="outline"
                  className="my-6"
                  onClick={uploadBanner}
                  disabled={isLoading}
                >
                  Upload
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoAndBanner;
