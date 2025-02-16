import React, { useEffect, useRef, useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../../ui/form/Input";
import OtpInput from "./OtpInput";

const OtpForm = () => {
  const [otpValue, setOtpValue] = useState<number>(0);

  return (
    <div className="mt-8 min-h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">
        Verify OTP
      </h2>
      <form className="mt-8 space-y-4  xs:px-2">
        <div className="grid grid-cols-6 gap-2 xs:gap-4">
          <OtpInput length={6} setOtpValue={setOtpValue} />
        </div>
        <Button
          style={{ width: "100%" }}
          rounded
          onClick={() => console.log(otpValue)}
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
