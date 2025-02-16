import React from "react";
import Input from "../../ui/form/Input";
import Button from "../../ui/button/Button";

const LoginForm = () => {
  return (
    <div className="mt-8 h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">Login</h2>
      <form className="mt-8 space-y-4 px-4 lg:px-8">
        <Input placeholder="Email*" />
        <Input placeholder="Password*" />
        <Button style={{ width: "100%" }}>Login</Button>
        <div className="text-right">
          <button type="button" className="text-sm text-primary">
            Forget Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
