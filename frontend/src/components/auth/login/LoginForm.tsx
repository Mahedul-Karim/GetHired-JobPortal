import React from "react";
import Input from "../../ui/form/Input";
import Button from "../../ui/button/Button";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div className="mt-8 h-[60%] flex flex-col justify-center">
      <h2 className="text-2xl font-medium text-center text-dark-0">Login</h2>
      <form className="mt-8 space-y-4 px-4 lg:px-8">
        <Input placeholder="Email Address" rounded/>
        <Input placeholder="Password" rounded/>
        <div className="text-right">
          <button type="button" className="text-sm text-primary">
            Forget Password?
          </button>
        </div>
        <Button style={{ width: "100%" }} rounded>Login</Button>
      <p className="flex items-center gap-2 text-sm text-dark-1">
        New Here? <Link to={'/sign-up'} className="text-primary">Create an account</Link>
      </p>
      </form>
    </div>
  );
};

export default LoginForm;
