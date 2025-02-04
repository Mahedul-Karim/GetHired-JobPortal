import { Outlet, useLocation } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  //className="bg-[url('/assets/hero-bg.png')] bg-cover bg-no-repeat"
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
