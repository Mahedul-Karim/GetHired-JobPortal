import React from "react";
import Input from "../../../ui/form/Input";
import {
  AtSign,
  Phone,
  UserRound,
  Globe,
  Clock3,
  Notebook,
  MapPin,
} from "lucide-react";
import TextArea from "../../../ui/form/TextArea";
import Button from "../../../ui/button/Button";
import { useForm } from "react-hook-form";

interface Props {
  user: any;
  token: string;
}

const BasicInfo: React.FC<Props> = ({ user, token }) => {
  const initialValues = {
    companyName: user?.companyName || "",
    phone: user?.phone || "",
    email: user?.email || "",
    website: user?.website || "",
    establishedAt: user?.establishedAt || "",
    comapnyLocation: user?.comapnyLocation || "",
    description: user?.description || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  return (
    <div className="mt-4">
      <form className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Company Name"
            Icon={UserRound}
            {...register("companyName")}
          />
          <Input
            placeholder="Company Phone Number"
            Icon={Phone}
            {...register("phone")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Company Email"
            Icon={AtSign}
            disabled
            {...register("email")}
          />
          <Input
            placeholder="Company Website"
            Icon={Globe}
            {...register("website")}
          />
        </div>
        <Input
          placeholder="Established Since"
          type="text"
          Icon={Clock3}
          {...register("establishedAt")}
        />
        <Input
          placeholder="Company Location"
          type="text"
          Icon={MapPin}
          {...register("comapnyLocation")}
        />
        <TextArea
          placeholder="Description"
          Icon={Notebook}
          {...register("description")}
        />
        <Button>Save Changes</Button>
      </form>
    </div>
  );
};

export default BasicInfo;
