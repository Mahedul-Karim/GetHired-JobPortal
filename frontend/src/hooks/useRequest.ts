import { useMutation } from "@tanstack/react-query";
import React from "react";
import { api } from "../util/api";

type MutationParams = {
  endpoint: string;
  options?: RequestInit;
};

interface Params<TData> {
  success: (data: TData) => void;
  error: (message: string) => void;
}

export const useRequest = <TData>({ success, error }: Params<TData>) => {
  const data = useMutation({
    mutationFn: ({ endpoint, options }: MutationParams) =>
      api({ endpoint, options }),
    onSuccess: (data) => {
      success(data);
    },
    onError: (err) => {
      error(err.message || "Something went wrong");
    },
  });

  return data;
};


