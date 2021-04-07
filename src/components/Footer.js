import React from "react";
import { Link } from "react-router-dom";

import apple from "../assets/apple-app-store.svg";
import playstore from "../assets/google-play-store.svg";
import google from "../assets/google-chrome-store.svg";

const Footer = () => {
  return (
    <footer className="navbar-light bg-light container ">
      <div className="container">
        <div className="row container">
          <div className="col-md-4 footer-box">
            {/*  MEdia */}
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
            <div className=" box">
              <p className="copyright quick-links">
                &copy; Copyright {new Date().getFullYear()} Muna.io
              </p>
            </div>
          </div>

          <div className="col-md-4 footer-box footer-middle py-5 ">
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
                <a aria-label="terms" target="_blank" rel="noreferrer" href="#">
                  Terms
                </a>
              </li>
              <li className="list-inline-item">
                <Link
                  className="policy-footer"
                  to="policy"
                  offset={150}
                  rel="noopener"
                >
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Security
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 footer-box footer-box-img  ">
            <ul className="list-inline ">
              <li className="list-inline-item">
                <a
                  aria-label="apple-store"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.apple.com/shop"
                >
                  <img src={apple} alt="apple-store" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="google-play-store"
                  target="_blank"
                  rel="noreferrer"
                  href="https://play.google.com/store"
                >
                  <img src={playstore} alt="goole-play-store" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  aria-label="google-chrome-store"
                  target="_blank"
                  rel="noreferrer"
                  href="https://chrome.google.com/webstore/category/extensions"
                >
                  <img src={google} alt="goole-chrome-store" />
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
