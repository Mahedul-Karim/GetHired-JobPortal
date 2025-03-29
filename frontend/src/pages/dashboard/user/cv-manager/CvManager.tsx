import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePDF } from "@react-pdf/renderer";

import Restricted from "../../../../components/ui/Restricted";

import Button from "../../../../components/ui/button/Button";
import Upload from "../../../../components/ui/form/Upload";
import Template from "../../../../components/dashboard/user/cv/Template";
import { useAlert } from "../../../../hooks/useAlert";
import { useRequest } from "../../../../hooks/useRequest";
import { setUser } from "../../../../store/slices/user";
import { useData } from "../../../../hooks/useData";
import Loader from "../../../../components/ui/loader/Loader";
import Error from "../../../../components/ui/Error";
import Card from "../../../../components/dashboard/user/cv/Card";

const CvManager = () => {
  const { user, token } = useSelector((state: any) => state.user);
  const [cv, setCv] = useState<File | null>(null);

  const [userCv, setUserCv] = useState<any>(null);

  const [instance, updateInstance] = usePDF({
    document: user?.resume && <Template user={user} />,
  });

  const { error: onError, success: onSuccess } = useAlert();

  const dispatch = useDispatch();

  const fileSizeRef = useRef<string | undefined>("0mb");

  const isProfileCompleted = user && user?.userProfileCompletion < 100;
  const hasResume = user && !user?.resume;

  const {
    data,
    isPending: isLoading,
    error,
  }: {
    data: any;
    isPending: boolean;
    error: any;
    isFetching: boolean;
  } = useData({
    key: ["user-cv"],
    endpoint: "cv",
    options: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data?.cv) {
      setUserCv(data?.cv);
    }
  }, [data]);

  const { mutate, isPending } = useRequest({
    success(data: any) {
      onSuccess(data.message);
      setUserCv(data.cv);
      dispatch(setUser({ user: data.user }));
      setCv(null);
    },
    error(message) {
      onError(message);
    },
  });

  if (isProfileCompleted) {
    return <Restricted text="Complete your profile to create cv! ⚒" />;
  }

  if (hasResume) {
    return <Restricted text="Complete your resume first to create cv! ⚒" />;
  }

  const getCV = (file: File, size?: string) => {
    setCv(file);
    fileSizeRef.current = size;
  };

  const uploadCv = (cv: any) => {
    const formData = new FormData();

    formData.append("cv", cv);

    const options = {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    mutate({ endpoint: "cv", options });
  };

  const createCv = async () => {
    if (!instance.url) return onError("PDF not generated");

    const response = await fetch(instance.url);
    const pdfBlob = await response.blob();

    uploadCv(pdfBlob);
  };

  const onUploadCv = () => {
    uploadCv(cv);
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    onError(error.message);
    return <Error text={error.message} />;
  }

  return (
    <div>
      {!userCv ? (
        <>
          {!cv && (
            <>
              <div>
                <Button
                  variant="outline"
                  style={{ width: "100%" }}
                  disabled={isPending}
                  onClick={createCv}
                >
                  Create CV
                </Button>
              </div>
              <div className="my-6 flex items-center gap-4">
                <div className="h-[1px] bg-gray-300 grow" />
                <p className="text-gray-400">OR</p>
                <div className="h-[1px] bg-gray-300 grow" />
              </div>
            </>
          )}
          <div>
            <Upload uploadType="pdf" setFile={getCV} fileId={"user-cv"} />
            {cv && (
              <>
                <div className="flex items-center justify-between gap-2 xs:text-sm text-xs font-medium text-dark-2 my-4">
                  <p>{cv?.name}</p>
                  <p>{fileSizeRef.current}</p>
                </div>
                <Button
                  style={{ width: "100%" }}
                  disabled={isPending}
                  onClick={onUploadCv}
                >
                  Upload CV
                </Button>
              </>
            )}
          </div>
        </>
      ) : (
        <Card
          name={userCv?.cvUrl?.split("/")?.pop()}
          createdAt={new Date(userCv?.createdAt)}
          url={userCv?.cvUrl}
          token={token}
          cv={userCv}
          setCv={setUserCv}
        />
      )}
    </div>
  );
};

export default CvManager;
