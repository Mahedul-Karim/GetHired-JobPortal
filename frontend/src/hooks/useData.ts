import { useQuery } from "@tanstack/react-query";
import React from "react";
import { api } from "../util/api";

interface Props<T> {
  key: Array<T>;
  endpoint: string;
  options?: RequestInit;
}

export const useData = <T>({
  key,
  endpoint,
  options
}: Props<T>) => {
  const data = useQuery({
    queryKey: [...key],
    queryFn: () => api({ endpoint, options }),
    retry: false,
  });

  return data;
};
