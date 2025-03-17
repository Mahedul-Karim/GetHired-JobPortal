import { RouterProvider } from "react-router";

import { router } from "./routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInitialAuth } from "./store/slices/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("getHiredUser")!) || null;
    const token = JSON.parse(localStorage.getItem("token")!) || null;

    dispatch(setInitialAuth({ user, token }));
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
