import React from "react";
import { Link as RscrollLink } from "react-scroll";
import logo from "../assets/munaiologo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <RscrollLink className="navbar-brand" offset={-110} href="#">
        <img className="logo" src={logo} alt="logo" srcset="" />
      </RscrollLink>
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
            <RscrollLink to="consumer" className="nav-a" href="#">
              Consumer <span className="sr-only">(current)</span>
            </RscrollLink>
          </li>
          <li className="nav-item">
            <RscrollLink to="company" className="nav-a" href="#">
              Company
            </RscrollLink>
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
            <RscrollLink to="about" className="nav-a">
              About
            </RscrollLink>
          </li>
          <li className="nav-item">
            <RscrollLink className="nav-a">Log in</RscrollLink>
          </li>
          <li className="nav-item">
            <RscrollLink to="join-muna" className="nav-a">
              <button type="button" class="btn btn-dark btn-lg">
                Join Muna
              </button>
            </RscrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
