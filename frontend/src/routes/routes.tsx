import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Jobs from "../pages/jobs/Jobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path:'jobs',
        element:<Jobs />
      }
    ],
  },
]);
