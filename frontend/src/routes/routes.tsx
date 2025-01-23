import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Jobs from "../pages/jobs/Jobs";

import ErrorBoundary from "../util/ErrorBoundary";
import ErrorsFallback from "../components/errors/ErrorsFallback";
import BoundaryWrapper from "./BoundaryWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <BoundaryWrapper>
            <Home />
          </BoundaryWrapper>
        ),
      },
      {
        path: "jobs",
        element: (
          <BoundaryWrapper>
            <Jobs />
          </BoundaryWrapper>
        ),
      },
    ],
  },
]);
