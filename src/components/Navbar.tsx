import React, { useState, useEffect } from "react";
import { FiMail, FiGithub, FiLinkedin, FiEdit } from "react-icons/fi";
import { HoverLink } from "./common/UI";
import "./styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const menuItems = ["Home", "About", "Services", "Experience", "Work", "Contact"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
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
          href="/Ali_Hamza_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-icon-link"
          title="Resume"
          data-cursor="disable"
        >
          <FiEdit />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
