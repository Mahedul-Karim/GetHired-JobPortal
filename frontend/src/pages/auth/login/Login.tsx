import React from "react";
import Logo from "../../../components/ui/Logo";
import LoginForm from "../../../components/auth/login/LoginForm";

const Login = () => {
  return (
    <main className="grid sm:grid-cols-[1fr_0.7fr] lg:grid-cols-[1fr_0.5fr] h-[100dvh] overflow-clip">
      <section className="hidden sm:grid place-items-center bg-primary-light-2">
        <img
          src="/assets/vectors/login.jpg"
          alt=""
          className="max-h-[600px] object-cover mix-blend-multiply"
        />
      </section>
      <section className="h-full bg-white showScrollbar overflow-auto px-4 py-6">
        <div className="flex justify-center">
            <Logo />
        </div>
        <hr className="my-6"/>
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
