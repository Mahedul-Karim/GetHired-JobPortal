import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Jobs from "../pages/jobs/Jobs";

import BoundaryWrapper from "./BoundaryWrapper";
import JobDetails from "../pages/jobs/details/JobDetails";
import Blog from "../pages/blogs/Blog";
import BlogDetails from "../pages/blogs/details/BlogDetails";
import AboutUs from "../pages/about-us/AboutUs";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/sign-up/SignUp";
import Otp from "../pages/auth/otp/Otp";
import UserLayout from "../pages/layout/UserLayout";
import UserHome from "../pages/dashboard/user/home/UserHome";
import UserProfile from "../pages/dashboard/user/profile/UserProfile";
import AppliedJobs from "../pages/dashboard/user/applied-jobs/AppliedJobs";
import Resume from "../pages/dashboard/user/resume/Resume";
import SavedJobs from "../pages/dashboard/user/saved-jobs/SavedJobs";
import CvManager from "../pages/dashboard/user/cv-manager/CvManager";
import JobAlert from "../pages/dashboard/user/job-alert/JobAlert";
import Chat from "../pages/dashboard/user/chat/Chat";
import UserDetails from "../pages/dashboard/user/details/UserDetails";
import AdminLayout from "../pages/layout/AdminLayout";
import AdminHome from "../pages/dashboard/employer/home/AdminHome";
import CompanyProfile from "../pages/dashboard/employer/profile/CompanyProfile";
import CreateJobs from "../pages/dashboard/employer/jobs/create/CreateJobs";
import ManageJobs from "../pages/dashboard/employer/jobs/manage/ManageJobs";
import Candidates from "../pages/dashboard/employer/candidates/Candidates";
import SavedResumes from "../pages/dashboard/employer/saved-resume/SavedResumes";
import Chats from "../components/dashboard/common/chats/Chats";
import EmployerChats from "../pages/dashboard/employer/chat/EmployerChats";

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
      {
        path: "about-us",
        element: (
          <BoundaryWrapper>
            <AboutUs />
          </BoundaryWrapper>
        ),
      },
      {
        path: "user/:userId",
        element: (
          <BoundaryWrapper>
            <UserDetails />
          </BoundaryWrapper>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <BoundaryWrapper>
        <Login />
      </BoundaryWrapper>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <BoundaryWrapper>
        <SignUp />
      </BoundaryWrapper>
    ),
  },
  {
    path: "/otp",
    element: (
      <BoundaryWrapper>
        <Otp />
      </BoundaryWrapper>
    ),
  },
  {
    path: "/user/dashboard",
    element: <UserLayout />,
    children: [
      {
        path: "/user/dashboard",
        index: true,
        element: (
          <BoundaryWrapper>
            <UserHome />
          </BoundaryWrapper>
        ),
      },
      {
        path: "profile",
        element: (
          <BoundaryWrapper>
            <UserProfile />
          </BoundaryWrapper>
        ),
      },
      {
        path: "applied-jobs",
        element: (
          <BoundaryWrapper>
            <AppliedJobs />
          </BoundaryWrapper>
        ),
      },
      {
        path: "my-resume",
        element: (
          <BoundaryWrapper>
            <Resume />
          </BoundaryWrapper>
        ),
      },
      {
        path: "saved-jobs",
        element: (
          <BoundaryWrapper>
            <SavedJobs />
          </BoundaryWrapper>
        ),
      },
      {
        path: "cv-manager",
        element: (
          <BoundaryWrapper>
            <CvManager />
          </BoundaryWrapper>
        ),
      },
      {
        path: "job-alert",
        element: (
          <BoundaryWrapper>
            <JobAlert />
          </BoundaryWrapper>
        ),
      },
      {
        path: "chat",
        element: (
          <BoundaryWrapper>
            <Chat />
          </BoundaryWrapper>
        ),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <BoundaryWrapper>
            <AdminHome />
          </BoundaryWrapper>
        ),
      },
      {
        path:'/admin/dashboard/profile',
        element: (
          <BoundaryWrapper>
            <CompanyProfile />
          </BoundaryWrapper>
        ),
      },
      {
        path:'/admin/dashboard/post-job',
        element: (
          <BoundaryWrapper>
            <CreateJobs />
          </BoundaryWrapper>
        ),
      },
      {
        path:'/admin/dashboard/manage-jobs',
        element: (
          <BoundaryWrapper>
            <ManageJobs />
          </BoundaryWrapper>
        ),
      },
      {
        path:'/admin/dashboard/candidates',
        element: (
          <BoundaryWrapper>
            <Candidates />
          </BoundaryWrapper>
        ),
      },
      {
        path:'/admin/dashboard/saved-resumes',
        element: (
          <BoundaryWrapper>
            <SavedResumes />
          </BoundaryWrapper>
        ),
      },
      {
        path:'/admin/dashboard/chat',
        element: (
          <BoundaryWrapper>
            <EmployerChats />
          </BoundaryWrapper>
        ),
      },
    ],
  },
]);
