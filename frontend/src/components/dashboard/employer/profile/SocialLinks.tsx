import React from "react";

import Input from "../../../ui/form/Input";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Button from "../../../ui/button/Button";
import { useDispatch } from "react-redux";
import { useAlert } from "../../../../hooks/useAlert";
import { useRequest } from "../../../../hooks/useRequest";
import { setUser } from "../../../../store/slices/user";
import { useForm } from "react-hook-form";

interface Props {
  user: any;
  token: string;
}

type SocialForm = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

const SocialLinks: React.FC<Props> = ({ user, token }) => {
  const dispatch = useDispatch();

  const { success: onSuccess, error: onError, warning } = useAlert();

  const { mutate, isPending } = useRequest({
    success: (data: any) => {
      onSuccess(data.message);
      dispatch(setUser({ user: data.company }));
    },
    error: (err: any) => {
      onError(err);
    },
  });

  const initialValues: any = {
    facebook: user?.facebook || "",
    twitter: user?.twitter || "",
    instagram: user?.instagram || "",
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

    mutate({ endpoint: "company", options });
  };

  return (
    <div className="mt-4">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Facebook"
            Icon={Facebook}
            {...register("facebook")}
            disabled={isPending}
          />
          <Input
            placeholder="Twitter"
            Icon={Twitter}
            {...register("twitter")}
            disabled={isPending}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Whatsapp"
            Icon={Instagram}
            {...register("instagram")}
            disabled={isPending}
          />
          <Input
            placeholder="Linkedin"
            Icon={Linkedin}
            {...register("linkedin")}
            disabled={isPending}
          />
        </div>
        <Button type="submit" disabled={isPending} >Save Changes</Button>
      </form>
    </div>
  );
};

export default SocialLinks;
