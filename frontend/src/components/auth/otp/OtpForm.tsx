import React, { useEffect, useRef, useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../../ui/form/Input";
import OtpInput from "./OtpInput";
import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "../../../hooks/useRequest";
import { useAlert } from "../../../hooks/useAlert";
import { useNavigate } from "react-router";
import { setSignUpData } from "../../../store/slices/user";

const OtpForm = () => {
  const [otpValue, setOtpValue] = useState<number>(0);

  const { success: alertSuccess, error: alertError } = useAlert();

  const { signUpData } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { mutate, isPending } = useRequest({
    success: () => {
      alertSuccess("Account created successfully!");
      navigate("/login");
      dispatch(setSignUpData(null));
    },
    error: (err: any) => {
      alertError(err);
    },
  });

  const handleUserCreate = () => {
    const details = { ...signUpData };

    details.otp = otpValue.toString();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    };

    mutate({ endpoint: "user/sign-up", options });
  };

  return (
    <div className="mt-8 min-h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">
        Verify OTP
      </h2>
      <form className="mt-8 space-y-4  xs:px-2">
        <div className="grid grid-cols-6 gap-2 xs:gap-4">
          <OtpInput length={6} setOtpValue={setOtpValue} disabled={isPending} />
        </div>
        <Button
          style={{ width: "100%" }}
          disabled={isPending}
          rounded
          onClick={handleUserCreate}
        >
          Verify
        </Button>
        <div className="text-right">
          <button type="button" className="text-sm text-primary">
            Resend OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
