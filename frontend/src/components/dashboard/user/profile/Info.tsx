import React, { useState } from "react";
import Input from "../../../ui/form/Input";

import {
  UserRound,
  Phone,
  AtSign,
  Globe,
  GraduationCap,
  Languages,
  Calendar,
  Earth,
  Building2,
  Milestone,
  MapPin,
  ListCollapse,
} from "lucide-react";
import TextArea from "../../../ui/form/TextArea";
import Button from "../../../ui/button/Button";
import Checkbox from "../../../ui/check/Checkbox";
import ProfileUpload from "../../common/ProfileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "../../../../hooks/useAlert";
import { useRequest } from "../../../../hooks/useRequest";
import { setUser } from "../../../../store/slices/user";
import { useForm } from "react-hook-form";

interface Props {
  user: any;
}

type InfoForm = {
  firstName: string;
  lastName: string;
  portfolio: string;
  phone: string;
  qualification: string;
  knownLanguages: string;
  age: number;
  country: string;
  city: string;
  postCode: string;
  gender: string;
  address: string;
  bio: string;
  dateOfBirth: Date;
};

const Info: React.FC<Props> = ({ user }) => {
  const [avatar, setAvatar] = useState<File | null>(null);

  const { token } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const { success: onSuccess, error: onError, warning } = useAlert();

  const { mutate, isPending } = useRequest({
    success: (data: any) => {
      onSuccess(data.message);
      dispatch(setUser({ user: data.user }));

      if (avatar) {
        setAvatar(null);
      }
    },
    error: (err: any) => {
      onError(err);
    },
  });

  const initialValues: any = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    portfolio: user?.portfolio || "",
    phone: user?.phone || "",
    qualification: user?.qualification || "",
    knownLanguages: user?.knownLanguages || "",
    age: user?.age || "",
    country: user?.country || "",
    city: user?.city || "",
    postCode: user?.postCode || "",
    gender: user?.gender || "",
    address: user?.address || "",
    bio: user?.bio || "",
    dateOfBirth: user?.dateOfBirth?.split("T")[0] || "",
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InfoForm>({
    defaultValues: initialValues,
  });

  const onSubmit = (values: InfoForm) => {
    const updatedFields = Object.fromEntries(
      Object.entries(values).filter(
        ([key, value]) => value !== initialValues[key]
      )
    );

    if (Object.keys(updatedFields).length === 0) {
      return warning("No field was updated");
    }

    if (updatedFields.dateOfBirth) {
      updatedFields.dateOfBirth = new Date(updatedFields.dateOfBirth);
    }

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedFields),
    };

    mutate({ endpoint: "user", options });
  };

  const uploadImage = () => {
    const formData = new FormData();

    formData.append("avatar", avatar as Blob);

    const options = {
      method: "PATCH",
      headers: {
        authorization: ` Bearer ${token}`,
      },
      body: formData,
    };

    mutate({ endpoint: "user", options });
  };

  return (
    <div className="mt-4">
      <ProfileUpload
        avatar={avatar}
        setAvatar={setAvatar}
        src={user?.profilePic?.url}
        uploadImage={uploadImage}
        isPending={isPending && !isSubmitting}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Your First Name"
            Icon={UserRound}
            disabled={isPending}
            {...register("firstName")}
          />
          <Input
            placeholder="Your Last Name"
            Icon={UserRound}
            disabled={isPending}
            {...register("lastName")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Date of birth"
            type="date"
            Icon={Calendar}
            disabled={isPending}
            {...register("dateOfBirth")}
          />
          <Input
            placeholder="Your Phone Number"
            Icon={Phone}
            disabled={isPending}
            {...register("phone")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Email Address"
            Icon={AtSign}
            value={user?.email}
            disabled
          />
          <Input
            placeholder="Portfolio Website"
            Icon={Globe}
            disabled={isPending}
            {...register("portfolio")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Qualification"
            Icon={GraduationCap}
            disabled={isPending}
            {...register("qualification")}
          />
          <Input
            placeholder="Known Languages"
            Icon={Languages}
            disabled={isPending}
            {...register("knownLanguages")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Age"
            Icon={Calendar}
            {...register("age")}
            disabled={isPending}
          />
          <Input
            placeholder="Country"
            Icon={Earth}
            {...register("country")}
            disabled={isPending}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="City"
            Icon={Building2}
            {...register("city")}
            disabled={isPending}
          />
          <Input
            placeholder="Post Code"
            Icon={Milestone}
            disabled={isPending}
            {...register("postCode")}
          />
        </div>
        <div>
          <label className="font-medium text-sm mb-1 inline-block text-dark-2">
            Gender:
          </label>
          <div className="flex items-center gap-4">
            <Checkbox
              checkId="male"
              value="male"
              label="Male"
              {...register("gender")}
            />
            <Checkbox
              checkId="female"
              value="female"
              label="Female"
              {...register("gender")}
            />
          </div>
        </div>
        <Input
          placeholder="Full Address"
          Icon={MapPin}
          disabled={isPending}
          {...register("address")}
        />
        <TextArea
          placeholder="Your Bio"
          Icon={ListCollapse}
          disabled={isPending}
          {...register("bio")}
        />
        <Button type="submit" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Info;
