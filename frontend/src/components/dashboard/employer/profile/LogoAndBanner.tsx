import React from "react";
import ProfileUpload from "../../common/ProfileUpload";
import Upload from "../../../ui/form/Upload";
import Button from "../../../ui/button/Button";
import { Trash2 } from "lucide-react";

const LogoAndBanner = () => {
  return (
    <div className="mt-4">
      <div>
        <ProfileUpload />
        {/* <Button className="mt-3">Upload</Button> */}
      </div>
      <div className="my-4">
        <h3 className="font-medium mb-1">Banner Image:</h3>
        <Upload fileId={"banner"} uploadType="image" />
        <div className="my-2 relative">
          <img
            src="https://images.unsplash.com/photo-1726607424599-db0c41681494?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg object-cover max-h-[250px] w-full"
          />
          <div className="absolute top-4 right-4">
            <button className="p-1 xs:p-2 bg-primary-light-1 rounded-lg text-primary">
              <Trash2 className="sm:size-6 size-4 xs:size-5"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAndBanner;
