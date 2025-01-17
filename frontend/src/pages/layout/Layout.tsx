import { Outlet, useLocation } from "react-router";
import Header from "../../components/header/Header";

const Layout = () => {
  //className="bg-[url('/assets/hero-bg.png')] bg-cover bg-no-repeat"
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Layout;
