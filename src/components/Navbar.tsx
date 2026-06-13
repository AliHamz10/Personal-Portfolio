import React, { useState, useEffect } from "react";
import { FiMail, FiGithub, FiLinkedin, FiEdit } from "react-icons/fi";
import { HoverLink } from "./common/UI";
import "./styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Experience", "Work", "Contact"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (const item of menuItems) {
        const id = `#${item.toLowerCase().replace(/\s+/g, "-")}`;
        const element = document.querySelector(id) as HTMLElement;
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="header">
      <div className="header-left">
        <a href="/#" className="navbar-title">
          Ali Hamza
        </a>
        <ul className="nav-menu">
          {menuItems.map((item) => {
            const id = `#${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={item}>
                <HoverLink
                  text={item}
                  href={id}
                  onClick={(e) => handleNavClick(e, id)}
                  active={activeSection === id}
                  className="nav-link"
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="header-right">
        <a
          href="mailto:alihamzatk@gmail.com"
          className="nav-icon-link"
          title="Email"
          data-cursor="disable"
        >
          <FiMail />
        </a>
        <a
          href="https://github.com/AliHamz10"
          target="_blank"
          rel="noreferrer"
          className="nav-icon-link"
          title="GitHub"
          data-cursor="disable"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alihamz/"
          target="_blank"
          rel="noreferrer"
          className="nav-icon-link"
          title="LinkedIn"
          data-cursor="disable"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://substack.com/@alihamz10"
          target="_blank"
          rel="noreferrer"
          className="nav-icon-link"
          title="Substack"
          data-cursor="disable"
        >
          <FiEdit />
        </a>
      </div>

      <button
        className={`navbar-toggler ${isMenuOpen ? "" : "collapsed"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon">
          <span className="toggler-icon-line"></span>
          <span className="toggler-icon-line"></span>
          <span className="toggler-icon-line"></span>
        </span>
      </button>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-menu">
          {menuItems.map((item) => {
            const id = `#${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={item}>
                <HoverLink
                  text={item}
                  href={id}
                  onClick={(e) => handleNavClick(e, id)}
                  active={activeSection === id}
                  className="mobile-nav-link"
                />
              </li>
            );
          })}
        </ul>
        <div className="mobile-social-links">
          <a
            href="mailto:alihamzatk@gmail.com"
            className="mobile-icon-link"
            title="Email"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/AliHamz10"
            target="_blank"
            rel="noreferrer"
            className="mobile-icon-link"
            title="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alihamz/"
            target="_blank"
            rel="noreferrer"
            className="mobile-icon-link"
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://substack.com/@alihamz10"
            target="_blank"
            rel="noreferrer"
            className="mobile-icon-link"
            title="Substack"
          >
            <FiEdit />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
