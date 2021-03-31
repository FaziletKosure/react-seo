import React from "react";
import { Link } from "react-router-dom";
// import { Link as rscrollLink } from "react-scroll";
import logo from "../assets/munaiologo.svg";

//  REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" offset={-110} href="#">
        <img className="logo" src={logo} alt="logo" srcset="" />
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
            <Link to="/" className="nav-a" href="#">
              Consumer <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="nav-a" href="#">
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
            <Link to="about" className="nav-a">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a">Log in</Link>
          </li>
          <li className="nav-item">
            <Link to="join-muna" className="nav-a">
              <button type="button" class="btn btn-dark btn-lg">
                Join Muna
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
