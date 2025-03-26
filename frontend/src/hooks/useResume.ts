import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { api } from "../util/api";
import { useSelector } from "react-redux";

type MutationParams = {
  body: BodyInit;
};

interface Params<TData> {
  success: (data: TData) => void;
  error: (message: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useResume = <TData>({
  success,
  error,
  setOpen,
}: Params<TData>) => {
  const queryClient = useQueryClient();

  const { token } = useSelector((state: any) => state.user);

  const options: RequestInit = {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const data = useMutation({
    mutationFn: ({ body }: MutationParams) =>
      api({ endpoint: "resume", options: { ...options, body } }),
    onSuccess: (data) => {
      success(data);
      queryClient.invalidateQueries({ queryKey: ["user-resume"] });
      setOpen(false);
    },
    onError: (err) => {
      error(err.message || "Something went wrong");
    },
  });

  return data;
};
