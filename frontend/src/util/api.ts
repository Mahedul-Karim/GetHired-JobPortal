import { BACKEND_URL } from "./util";

interface Params {
  endpoint: string;
  options?: RequestInit;
}

const api = async ({ endpoint, options }: Params) => {
  try {
    const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
      ...options,
      credentials: "include",
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "An unknown error occured"
    );
  }
};

export { api };
