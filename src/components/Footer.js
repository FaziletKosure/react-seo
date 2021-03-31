import React from "react";

const Footer = () => {
  return (
    <footer className="navbar-light bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 box">
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 box">
            <p className="copyright quick-links">
              {new Date().getFullYear()} &copy; Muna.io, Belgium
            </p>
          </div>
          <div className="col-md-3 box">
            <h6 className="copyright quick-links">Contact: +32494655559</h6>
          </div>
          <div className="col-md-3 box">
            <ul className="list-inline ">
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.facebook.com/Munamarketplace/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/company/munaapp/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" href="https://www.instagram.com/muna.io/">
                  <i class="fab fa-instagram"></i>
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
