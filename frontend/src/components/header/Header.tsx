import Logo from "../ui/Logo";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import Container from "../layout/Container";
import { useLocation } from "react-router";

const Header = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  const { observeSections } = useIntersectionObserver({
    threshold: 0,
    action: (element, isIntersecting) => {
      if (!containerRef.current) return;

      if (!isIntersecting) {
        containerRef.current!.classList.add("stickyNav");
      } else {
        containerRef.current!.classList.remove("stickyNav");
      }
    },
  });

  useEffect(() => {
    if (sentinelRef.current) {
      observeSections([sentinelRef.current]);
    }
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        className="h-[64px] absolute top-0 left-0 w-full -z-[1] pointer-events-none"
      />
      <section
        className={`absolute top-0 left-0 w-full ${
          location.pathname === "/" ? "bg-none" : "bg-white"
        }`}
        ref={containerRef}
      >
        <Container
          as="nav"
          className={`flex items-center justify-between py-3`}
        >
          <Logo />
          <Nav className="hidden md:flex" />
          <MobileNav />
        </Container>
      </section>
    </>
  );
};

export default Header;
