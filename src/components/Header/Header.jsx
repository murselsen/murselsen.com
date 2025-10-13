import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Css
import NavbarCss from "./Header.module.css";
import "remixicon/fonts/remixicon.css";
const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleNavbarMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={NavbarCss.Navbar}>
      <div className={NavbarCss.Navbar__header}>
        <div className={NavbarCss.Navbar__headerLogo}>
          <a href="/" className={NavbarCss.logoTitle}>
            mursel-sen
          </a>
        </div>
        <div className={NavbarCss.Navbar__headerToggle}>
          <button
            className={NavbarCss.navbarToggle}
            id="navbar-toggle"
            onClick={handleNavbarMenuToggle}
          >
            {isNavbarOpen ? (
              <i className="ri-close-line" id="navbar-toggle-icon"></i>
            ) : (
              <i className="ri-menu-line" id="navbar-toggle-icon"></i>
            )}
          </button>
        </div>
      </div>
      <div
        className={
          isNavbarOpen
            ? `${NavbarCss.Navbar__content} ${NavbarCss.active}`
            : `${NavbarCss.Navbar__content}`
        }
        id="navbar-menu"
      >
        <p className={NavbarCss.Navbar__contentTitle}># navigate:</p>
        <ul className={NavbarCss.Navbar__contentList}>
          <MenuItem type="menu" title="Home" link="/" />
          <MenuItem type="menu" title="About_Me" link="about" />
          <MenuItem type="menu" title="Projects" link="project" />
          <MenuItem type="menu" title="Contact_Me" link="contact-me" />
          <li className={`${NavbarCss.Navbar__contentItem} ${NavbarCss.lang}`}>
            <Link to="#">
              <img src="./images/icon/lg_enUS.png" width="25" alt="english" />{" "}
              <span>_EN-US</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const MenuItem = ({ title, link }) => {
  const { pathname } = useLocation();
  let result, active;
  if (link === "/") {
    result = pathname === link;
  } else {
    result = pathname === "/" + link;
  }
  active = result;
  return (
    <li
      className={
        active
          ? `${NavbarCss.Navbar__contentItem} ${NavbarCss.active}`
          : `${NavbarCss.Navbar__contentItem}`
      }
    >
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default Header;
