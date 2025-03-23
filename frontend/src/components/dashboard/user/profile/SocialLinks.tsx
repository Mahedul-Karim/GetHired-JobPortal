import React from "react";
import Input from "../../../ui/form/Input";

import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import Button from "../../../ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "../../../../hooks/useAlert";
import { useRequest } from "../../../../hooks/useRequest";
import { setUser } from "../../../../store/slices/user";
import { useForm } from "react-hook-form";

type SocialForm = {
  facebook: string;
  twitter: string;
  github: string;
  linkedin: string;
};

const SocialLinks = ({ user }: { user: any }) => {
  const { token } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const { success: onSuccess, error: onError, warning } = useAlert();

  const { mutate, isPending } = useRequest({
    success: (data: any) => {
      onSuccess(data.message);
      dispatch(setUser({ user: data.user }));
    },
    error: (err: any) => {
      onError(err);
    },
  });

  const initialValues: any = {
    facebook: user?.facebook || "",
    twitter: user?.twitter || "",
    github: user?.github || "",
    linkedin: user?.linkedin || "",
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SocialForm>({
    defaultValues: initialValues,
  });

  const onSubmit = (values: SocialForm) => {
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

    mutate({ endpoint: "user", options });
  };

  return (
    <div className="mt-4">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Facebook"
            Icon={Facebook}
            disabled={isPending}
            {...register("facebook")}
          />
          <Input
            placeholder="Twitter"
            Icon={Twitter}
            disabled={isPending}
            {...register("twitter")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Github"
            Icon={Github}
            disabled={isPending}
            {...register("github")}
          />
          <Input
            placeholder="Linkedin"
            Icon={Linkedin}
            disabled={isPending}
            {...register("linkedin")}
          />
        </div>
        <Button type="submit" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default SocialLinks;
