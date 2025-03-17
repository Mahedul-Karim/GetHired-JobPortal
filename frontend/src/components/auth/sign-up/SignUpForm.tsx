import React, { useRef, useState } from "react";
import { UsersRound, Building } from "lucide-react";

import Input from "../../ui/form/Input";
import Button from "../../ui/button/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAlert } from "../../../hooks/useAlert";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../../../store/slices/user";
import { useRequest } from "../../../hooks/useRequest";
import Spinner from "../../ui/loader/Spinner";

type FormData = {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const { success: alertSuccess, error: alertError } = useAlert();

  const [accountType, setAccountType] = useState("candidate");
  const bgRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>();

  const { mutate, isPending } = useRequest({
    success: (data: any) => {
      alertSuccess(data.message);
      reset();
      navigate("/otp");
    },
    error: (err: any) => {
      alertError(err);
    },
  });

  const submitForm = (values: FormData) => {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      companyName,
    } = values;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };

    if (accountType === "candidate") {
      dispatch(
        setSignUpData({
          email,
          firstName,
          lastName,
          password,
          confirmPassword,
          accountType,
        })
      );
    } else {
      dispatch(
        setSignUpData({
          email,
          companyName,
          password,
          confirmPassword,
          accountType,
        })
      );
    }

    mutate({
      endpoint: "user/otp",
      options,
    });
  };

  return (
    <div className="mt-8 min-h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">
        Create Account
      </h2>
      <form className="mt-8 space-y-4 px-4" onSubmit={handleSubmit(submitForm)}>
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
              reset();
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
              reset();
            }}
          >
            <Building className="size-[18px]" /> Employer
          </button>
        </div>
        {accountType === "candidate" ? (
          <div className="flex flex-col xs:flex-row  gap-4">
            <Input
              placeholder="First Name"
              rounded
              containerClass="w-full"
              {...register("firstName", {
                required: "First name is required",
              })}
              error={errors.firstName && errors.firstName.message}
              disabled={isPending}
            />
            <Input
              placeholder="Last Name"
              rounded
              containerClass="w-full"
              {...register("lastName", {
                required: "Last name is required",
              })}
              error={errors.lastName && errors.lastName.message}
              disabled={isPending}
            />
          </div>
        ) : (
          <Input
            placeholder="Company Name"
            rounded
            {...register("companyName", {
              required: "Company name is required",
            })}
            error={errors.companyName && errors.companyName.message}
            disabled={isPending}
          />
        )}
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
        <Input
          placeholder="Confirm Password"
          type="password"
          rounded
          {...register("confirmPassword", {
            required: "ConfirmPassword is required",
            validate: (value) => {
              return value !== getValues("password")
                ? "Password and ConfirmPassword does not match"
                : true;
            },
          })}
          error={errors.confirmPassword && errors.confirmPassword.message}
          disabled={isPending}
        />
        <Button
          style={{ width: "100%" }}
          rounded
          type="submit"
          disabled={isPending}
        >
          Create Account
        </Button>
        <p className="flex items-center gap-2 text-sm text-dark-1">
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
