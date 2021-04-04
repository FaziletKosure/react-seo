import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/munaiologo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  const toggleRef = React.useRef(null);
  const keyboardEvent = () => {
    toggleRef.current.click();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link
        to="consumer"
        className="navbar-brand"
        spy={true}
        smooth={true}
        offset={-50}
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
        ref={toggleRef}
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
              offset={-150}
              duration={1000}
              to="consumer"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={() => keyboardEvent()}
            >
              Consumer <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="company"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={() => keyboardEvent()}
            >
              Company
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              onClick={() => keyboardEvent()}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
