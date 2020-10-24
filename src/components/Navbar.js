import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { hoverBurger, linkStyling, mobileNav } from "./styles/Styles";
import HamburgerMenu from "react-hamburger-menu";

const NavBar = () => {
  const [hamburgeropen, sethamburgeropen] = useState({ open: false });

  const handleClick = () => {
    sethamburgeropen({ open: !hamburgeropen.open });
  };

  const linkClick = () => {
    sethamburgeropen({ open: false });
  };

  return (
    <div className="navigation">
      <div className="Navbar-container">
        <div className="navbar-items">
          <Link {...linkStyling} className="nav-logo" to="/">
            Uyaistone
          </Link>
          <span className="navbar-routers">
            <span>
              <Link {...linkStyling} to="/">
                Home
              </Link>
            </span>
            <span>
              <Link {...linkStyling} to="/Products">
                Products
              </Link>
            </span>
            <span>
              <Link {...linkStyling} to="/AboutUs">
                About Us
              </Link>
            </span>
            <span>
              <Link {...linkStyling} to="/ContactUs">
                Contact Us
              </Link>
            </span>
          </span>
          <span className="hamburger">
            <HamburgerMenu
              isOpen={hamburgeropen.open}
              menuClicked={handleClick.bind(!hamburgeropen.open)}
              width={30}
              height={20}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.4}
              {...hoverBurger}
            />
          </span>
        </div>
      </div>
      <div
        className={`nav-mobile ${hamburgeropen.open === true ? "open" : ""}`}
      >
        <ul>
          <li>
            <Link {...linkStyling} onClick={linkClick} {...mobileNav} to="/">
              Home
            </Link>
          </li>
          <hr />
          <li>
            <Link
              {...linkStyling}
              onClick={linkClick}
              {...mobileNav}
              to="/Products"
            >
              Products
            </Link>
          </li>
          <hr />
          <li>
            <Link
              {...linkStyling}
              onClick={linkClick}
              {...mobileNav}
              to="/AboutUs"
            >
              About Us
            </Link>
          </li>
          <hr/>
          <li>
            <Link
              {...linkStyling}
              onClick={linkClick}
              {...mobileNav}
              to="/ContactUs"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
