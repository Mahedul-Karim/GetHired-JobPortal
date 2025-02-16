import React, { useEffect, useRef, useState } from "react";
import Input from "../../ui/form/Input";

interface Props {
  length: number;
  setOtpValue: React.Dispatch<React.SetStateAction<number>>;
}

const OtpInput: React.FC<Props> = ({ length, setOtpValue }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    new Array(length).fill(null)
  );

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    const lastTypeValue = value.slice(-1);

    if (!/^[0-9]?$/.test(lastTypeValue)) return;

    const newOtp = [...otp];

    newOtp[index] = lastTypeValue;
    setOtp(newOtp);

    if (lastTypeValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((num) => num !== "")) {
      setOtpValue(parseInt(newOtp.join("")));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {otp.map((val, i) => (
        <Input
          key={i}
          value={val}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          placeholder=""
          centerInput
          style={{
            textAlign: "center",
            fontSize: "18px",
          }}
          ref={(el) => (inputRefs.current[i] = el)}
        />
      ))}
    </>
  );
};

export default OtpInput;
