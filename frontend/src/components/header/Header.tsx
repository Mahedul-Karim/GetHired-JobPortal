import Logo from "../ui/Logo";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";

const Header = () => {
  return (
    <section>
      <nav className="container flex items-center justify-between py-3">
        <Logo />
        <Nav className="hidden md:flex" />
        <MobileNav />
      </nav>
    </section>
  );
};

export default Header;
