import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Jobs from "../pages/jobs/Jobs";

import ErrorBoundary from "../util/ErrorBoundary";
import ErrorsFallback from "../components/errors/ErrorsFallback";
import BoundaryWrapper from "./BoundaryWrapper";
import JobDetails from "../pages/jobs/details/JobDetails";
import Blog from "../pages/blogs/Blog";
import BlogDetails from "../pages/blogs/details/BlogDetails";

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
      {
        path: "jobs/:slug",
        element: (
          <BoundaryWrapper>
            <JobDetails />
          </BoundaryWrapper>
        ),
      },
      {
        path: "blog",
        element: (
          <BoundaryWrapper>
            <Blog />
          </BoundaryWrapper>
        ),
      },
      {
        path: "blog/:slug",
        element: (
          <BoundaryWrapper>
            <BlogDetails />
          </BoundaryWrapper>
        ),
      },
    ],
  },
]);
