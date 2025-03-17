import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useAlert } from "../../hooks/useAlert";

interface Props {
  children: React.ReactNode;
  accountType: "candidate" | "employer";
}

const PrivateRoute = ({ children, accountType }: Props) => {
  const { user } = useSelector((state: any) => state.user);

  const { error } = useAlert();

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  if (user && user.accountType !== accountType) {
    error("You do not have permission to access this resources");
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default PrivateRoute;
