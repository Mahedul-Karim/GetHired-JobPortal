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
import { useAlert } from "../../../../hooks/useAlert";
import { useRequest } from "../../../../hooks/useRequest";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { setUser } from "../../../../store/slices/user";

interface Props {
  user: any;
  token: string;
}

const BasicInfo: React.FC<Props> = ({ user, token }) => {
  const initialValues: any = {
    companyName: user?.companyName || "",
    phone: user?.phone || "",
    email: user?.email || "",
    website: user?.website || "",
    establishedAt: user?.establishedAt || "",
    comapnyLocation: user?.comapnyLocation || "",
    description: user?.description || "",
  };

  const { warning, success: onSuccess, error: onError } = useAlert();

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  const { mutate, isPending } = useRequest({
    success(data: any) {
      onSuccess(data.message);
      dispatch(setUser({ user: data.company }));
      queryClient.invalidateQueries({ queryKey: ["company-states"] });
    },
    error(message) {
      onError(message);
    },
  });

  const onSubmit = (values: any) => {
    const updatedFields = Object.fromEntries(
      Object.entries(values).filter(
        ([key, value]) => value !== initialValues[key]
      )
    );

    if (Object.keys(updatedFields).length === 0) {
      return warning("No field was updated");
    }

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedFields),
    };

    mutate({ endpoint: "company", options });
  };

  return (
    <div className="mt-4">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Company Name"
            Icon={UserRound}
            {...register("companyName")}
            disabled={isPending}
          />
          <Input
            placeholder="Company Phone Number"
            Icon={Phone}
            {...register("phone")}
            disabled={isPending}
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
            disabled={isPending}
          />
        </div>
        <Input
          placeholder="Established Since"
          type="text"
          Icon={Clock3}
          {...register("establishedAt")}
          disabled={isPending}
        />
        <Input
          placeholder="Company Location"
          type="text"
          Icon={MapPin}
          {...register("comapnyLocation")}
          disabled={isPending}
        />
        <TextArea
          placeholder="Description"
          Icon={Notebook}
          {...register("description")}
          disabled={isPending}
        />
        <Button type="submit" disabled={isPending}>Save Changes</Button>
      </form>
    </div>
  );
};

export default BasicInfo;
