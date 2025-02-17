import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../dashboard/common/Sidebar";
import Container from "../../components/layout/Container";
import Header from "../dashboard/common/Header";

import {
  LayoutDashboard,
  UserRoundPen,
  Briefcase,
  ScrollText,
  FilePlus2,
  SquareChartGantt,
  Bell,
  MessageCircle
} from "lucide-react";

const USER_SIDEBAR = [
  {
    to: "/user/dashboard",
    Icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    to: "/user/dashboard/profile",
    Icon: UserRoundPen,
    label: "My Profile",
  },
  {
    to: "/user/dashboard/applied-jobs",
    Icon: Briefcase,
    label: "Applied Job",
  },
  {
    to: "/user/dashboard/my-resume",
    Icon: ScrollText,
    label: "My Resume",
  },
  {
    to: "/user/dashboard/saved-jobs",
    Icon: FilePlus2,
    label: "Saved Jobs",
  },
  {
    to: "/user/dashboard/cv-manager",
    Icon: SquareChartGantt,
    label: "CV Manager",
  },
  {
    to: "/user/dashboard/job-alert",
    Icon: Bell,
    label: "job Alert",
  },
  {
    to: "/user/dashboard/chat",
    Icon: MessageCircle,
    label: "Chat",
  },
];

const UserLayout = () => {
  const [open, setOpen] = useState(true);
  const [runAnimation, setRunAnimation] = useState(false);

  return (
    <main
      className={`grid grid-cols-[260px_1fr] h-screen overflow-clip ${
        !open ? "-ml-[260px]" : "ml-0"
      } transition-all duration-500`}
    >
      <Sidebar navItems={USER_SIDEBAR} />
      <section>
        <Header
          open={open}
          setOpen={setOpen}
          runAnimation={runAnimation}
          setRunAnimation={setRunAnimation}
        />
        <div className="h-[calc(100vh_-_70px)] overflow-auto showScrollbar">
          <Container className="p-4 bg-[#f3f2fc96] rounded-lg mt-4">
            <Outlet />
          </Container>
        </div>
      </section>
    </main>
  );
};

export default UserLayout;
