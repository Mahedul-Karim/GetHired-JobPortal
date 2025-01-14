import { Outlet, useLocation } from "react-router";
import Header from "../../components/header/Header";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <header className="bg-[url('/assets/hero-bg.png')] bg-cover bg-no-repeat">
          <Header />
        </header>
      ) : (
        <header>
          <Header />
        </header>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
