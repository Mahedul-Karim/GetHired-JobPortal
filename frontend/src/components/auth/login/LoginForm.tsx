import React, { useRef, useState } from "react";
import Input from "../../ui/form/Input";
import Button from "../../ui/button/Button";
import { Link, useNavigate } from "react-router";
import { UsersRound, Building } from "lucide-react";
import { useAlert } from "../../../hooks/useAlert";
import { useDispatch } from "react-redux";
import { useRequest } from "../../../hooks/useRequest";
import { setUser } from "../../../store/slices/user";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [accountType, setAccountType] = useState("candidate");
  const bgRef = useRef<HTMLDivElement | null>(null);

  const { success: onSuccess, error: onError } = useAlert();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { mutate, isPending } = useRequest({
    success: (data: any) => {
      dispatch(setUser({ user: data.user, token: data.token }));
      onSuccess("Logging in successfull");
      navigate("/");
    },
    error: (err) => {
      onError(err);
    },
  });

  const onSubmit = (values: FormData) => {
    const data = { ...values, accountType };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    mutate({ endpoint: "user/login", options });
  };

  return (
    <div className="mt-8 min-h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">Login</h2>
      <form
        className="mt-8 space-y-4 px-4 lg:px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-1 bg-primary-light-2 w-max rounded-full p-1 xs:p-2 relative z-[1]">
          <div
            className="px-3 xs:px-4 py-2 rounded-full absolute xs:left-2 left-1 top-1 xs:top-2 bg-primary max-w-[112px] xs:max-w-[120px] w-full h-10 z-[-1] transition-all duration-300"
            ref={bgRef}
          />
          <button
            type="button"
            className={`flex items-center gap-1 px-3 xs:px-4 py-2 rounded-full transition-all duration-300 
                ${accountType === "candidate" ? "text-white" : "text-dark-1"}
            `}
            onClick={(e) => {
              if (bgRef.current) {
                bgRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }

              setAccountType("candidate");
            }}
          >
            <UsersRound className="size-[18px]" /> Cadidate
          </button>
          <button
            type="button"
            className={`flex items-center gap-1  transition-all duration-300 px-3 xs:px-4 py-2 rounded-full 
                ${accountType === "employer" ? "text-white" : "text-dark-1"}
            `}
            onClick={(e) => {
              if (bgRef.current) {
                bgRef.current.style.left = `${e.currentTarget.offsetLeft}px`;
              }
              setAccountType("employer");
            }}
          >
            <Building className="size-[18px]" /> Employer
          </button>
        </div>

        <Input
          placeholder="Email Address"
          rounded
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid Email address",
            },
          })}
          error={errors.email && errors.email.message}
          disabled={isPending}
        />
        <Input
          placeholder="Password"
          rounded
          {...register("password", {
            required: "Password is required",
          })}
          type="password"
          error={errors.password && errors.password.message}
          disabled={isPending}
        />
        <div className="text-right">
          <button type="button" className="text-sm text-primary">
            Forget Password?
          </button>
        </div>
        <Button
          style={{ width: "100%" }}
          rounded
          type="submit"
          disabled={isPending}
        >
          Login
        </Button>
        <p className="flex items-center gap-2 text-sm text-dark-1">
          New Here?{" "}
          <Link to={"/sign-up"} className="text-primary">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
