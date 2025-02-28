import React, { useState } from "react";
import Sidebar from "../../components/dashboard/common/Sidebar";
import Header from "../../components/dashboard/common/Header";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Container from "../../components/layout/Container";
import { Outlet } from "react-router";
import {
  Bookmark,
  BookUser,
  Briefcase,
  LayoutDashboard,
  MessageCircle,
  NotebookPen,
  UserRoundPen,
} from "lucide-react";

const ADMIN_SIDEBAR = [
  {
    to: "/admin/dashboard",
    Icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    to: "/admin/dashboard/profile",
    Icon: UserRoundPen,
    label: "Company Profile",
  },
  {
    to: "/admin/dashboard/post-job",
    Icon: Briefcase,
    label: "Create Job",
  },
  {
    to: "/admin/dashboard/candidates",
    Icon: BookUser,
    label: "Candidates",
  },
  {
    to: "/admin/dashboard/manage-jobs",
    Icon: NotebookPen,
    label: "Manage Jobs",
  },
  {
    to: "/admin/dashboard/saved-resumes",
    Icon: Bookmark,
    label: "Saved Resumes",
  },
  {
    to: "/admin/dashboard/chat",
    Icon: MessageCircle,
    label: "Chat",
  },
];

const AdminLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(isDesktop);
  const [runAnimation, setRunAnimation] = useState(false);

  return (
    <main
      className={`grid grid-cols-[260px_1fr] h-screen overflow-clip ${
        !open ? "-ml-[260px]" : "ml-0"
      } transition-all duration-500`}
    >
      <Sidebar navItems={ADMIN_SIDEBAR} />
      <section>
        <Header
          open={open}
          setOpen={setOpen}
          runAnimation={runAnimation}
          setRunAnimation={setRunAnimation}
        />
        <div className="h-[calc(100vh_-_70px)] overflow-y-auto overflow-x-clip showScrollbar">
          <Container className="p-4 bg-[#f3f2fc96] rounded-lg mt-4">
            <Outlet />
          </Container>
        </div>
      </section>
    </main>
  );
};

export default AdminLayout;
