import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Consumer from "./secreens/Consumer";
import Company from "./secreens/Company";
import About from "./secreens/About";
import Policy from "./secreens/Policy";
import PolicyMobile from "./secreens/PolicyMobile";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1025px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  if (isTabletOrMobile) {
    return (
      <Router>
        <Switch>
          <Route
            path="/(about|company|)/"
            render={() => (
              <>
                <Navbar isTabletOrMobile={isTabletOrMobile} />
                <Consumer />
                <div></div>
                <a
                  href="#"
                  aria-label="up-angle"
                  rel="noreferrer"
                  className="pill"
                >
                  <i className="fas fa-angle-double-up up-angle"></i>
                </a>
                <Company />
                <About />
                <Footer />
              </>
            )}
          />
          {isTablet ? (
            <Route
              path="/policy"
              exact
              render={() => <Policy isTabletOrMobile={isTabletOrMobile} />}
            />
          ) : (
            <Route path="/policy" exact component={PolicyMobile} />
          )}
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <div id="container">
        <Navbar isTabletOrMobile={isTabletOrMobile} />
        <div id="main-content">
          <Switch>
            <Route path="/" exact component={Consumer} />
            <Route path="/company" exact component={Company} />
            <Route path="/About" exact component={About} />
            <Route path="/policy" exact component={Policy} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
