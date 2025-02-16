import React, { useRef, useState } from "react";
import { UsersRound, Building } from "lucide-react";

import Input from "../../ui/form/Input";
import Button from "../../ui/button/Button";
import { Link } from "react-router";

const SignUpForm = () => {
  const [accountType, setAccountType] = useState("candidate");
  const bgRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mt-8 h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">
        Create Account
      </h2>
      <form className="mt-8 space-y-4 px-4">
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
        {accountType === "candidate" ? (
          <div className="flex flex-col xs:flex-row items-center gap-4">
            <Input placeholder="First Name" rounded containerClass="w-full" />
            <Input placeholder="Last Name" rounded containerClass="w-full" />
          </div>
        ) : (
          <Input placeholder="Company Name" rounded />
        )}
        <Input placeholder="Email Address" rounded />
        <Input placeholder="Password" rounded />
        <Input placeholder="Confirm Password" rounded />
        <Button style={{ width: "100%" }} rounded>
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
