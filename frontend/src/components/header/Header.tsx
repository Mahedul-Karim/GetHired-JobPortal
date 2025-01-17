import Logo from "../ui/Logo";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";

const Header = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const { observeSections } = useIntersectionObserver({
    threshold: 0,
    action: (element, isIntersecting) => {
      console.log(isIntersecting)
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
    <div ref={sentinelRef} className="h-[64px] absolute top-0 left-0 w-full -z-[1] pointer-events-none"/>
    <section
      className={`absolute top-0 left-0 w-full`}
      ref={containerRef}
    >
      <nav className={`container flex items-center justify-between py-3`}>
        <Logo />
        <Nav className="hidden md:flex" />
        <MobileNav />
      </nav>
    </section>
      </>
  );
};

export default Header;
