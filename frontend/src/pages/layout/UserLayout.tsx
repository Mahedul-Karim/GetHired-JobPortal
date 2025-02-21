import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/dashboard/common/Sidebar";
import Container from "../../components/layout/Container";
import Header from "../../components/dashboard/common/Header";

import {
  LayoutDashboard,
  UserRoundPen,
  Briefcase,
  ScrollText,
  FilePlus2,
  SquareChartGantt,
  Bell,
  MessageCircle,
} from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
  // {
  //   to: "/user/dashboard/job-alert",
  //   Icon: Bell,
  //   label: "job Alert",
  // },
  {
    to: "/user/dashboard/chat",
    Icon: MessageCircle,
    label: "Chat",
  },
];

const UserLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [open, setOpen] = useState(isDesktop);
  const [runAnimation, setRunAnimation] = useState(false);

  useEffect(() => {
    setOpen(isDesktop);
  }, [isDesktop]);

  return (
    <main
      className={`grid grid-cols-[200px_1fr] xs:grid-cols-[260px_1fr] h-screen overflow-clip ${
        !open ? "-ml-[200px] xs:-ml-[260px]" : "ml-0"
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
        <div className="h-[calc(100vh_-_70px)] overflow-y-auto overflow-x-clip showScrollbar">
          <Container className="p-4 bg-[#f3f2fc96] rounded-lg mt-4">
            <Outlet />
          </Container>
        </div>
      </section>
    </main>
  );
};

export default UserLayout;
