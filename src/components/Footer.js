import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="navbar-light bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 box">
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
                <Link
                  className="policy-footer"
                  to="policy"
                  offset={150}
                  rel="noopener"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 box">
            <p className="copyright quick-links">
              {new Date().getFullYear()} &copy; Muna.io, Belgium
            </p>
          </div>
          <div className="col-md-3 box">
            <p className="copyright quick-links">Contact: +32494655559</p>
          </div>
          <div className="col-md-3 box  footer-icon-mobile">
            <ul className="list-inline ">
              <li className="list-inline-item">
                <a
                  aria-label="facebook"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Munamarketplace/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/munaapp/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/muna.io/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
