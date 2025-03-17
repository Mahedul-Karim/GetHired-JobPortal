import React from "react";
import Swal from "sweetalert2";

type Alert = (type: "success" | "warning" | "error", title: string) => void;

export const useAlert = () => {
  const setAlert: Alert = (type, title) => {
    Swal.fire({
      title: title,
      icon: type,
      confirmButtonColor: "#5049e1",
    });
  };

  const success = (title: string) => {
    setAlert("success", title);
  };

  const warning = (title: string) => {
    setAlert("warning", title);
  };
  const error = (title: string) => {
    setAlert("error", title);
  };

  return { success, warning, error };
};
