import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#about", text: "ABOUT" },
  { href: "#whatido", text: "INTERESTS" },
  { href: "#experience", text: "EXPERIENCE" },
  { href: "#education", text: "EDUCATION" },
  { href: "#work", text: "PROJECTS" },
  { href: "#contact", text: "CONTACT" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      ScrollTrigger.refresh(true);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDesktopClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.innerWidth > 1024) {
      e.preventDefault();
      scrollTo(href);
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => scrollTo(href), 300);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Fahad Ikram
        </a>
        <ul>
          {navLinks.map(({ href, text }) => (
            <li key={href}>
              <a data-href={href} href={href} onClick={(e) => handleDesktopClick(e, href)}>
                <HoverLinks text={text} />
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger-btn${menuOpen ? " hamburger-btn--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {navLinks.map(({ href, text }) => (
            <a key={href} href={href} onClick={(e) => handleMobileNavClick(e, href)}>
              {text}
            </a>
          ))}
        </nav>
      </div>
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
