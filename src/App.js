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

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1025px)" });
  if (isTabletOrMobile) {
    return (
      <Router>
        <Navbar isTabletOrMobile={isTabletOrMobile} />
        <Consumer />
        <Company />
        <About />
        <Footer />
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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
