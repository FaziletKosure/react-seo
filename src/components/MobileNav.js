import React, { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import logo from "../assets/munaiologo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link
        className="navbar-brand"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        data-bs-toggle="collapse"
        data-bs-target=".navbar-collapse.show"
      >
        <img className="logo" src={logo} alt="logo" srcSet="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#000", fontSize: "24px" }}
        />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              to="consumer"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Consumer <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="company"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className="nav-a"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Company
            </Link>
          </li>
          {/* <li className="nav-item">
              <Link className="nav-a" href="#">
                Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a" href="#">
                Team
              </Link>
            </li> */}
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className="nav-a"
            >
              About
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-a">Log in</Link>
          </li>
          <li className="nav-item">
            <Link to="join-muna" className="nav-a">
              <button type="button" className="btn btn-dark btn-lg">
                Join Muna
              </button>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
