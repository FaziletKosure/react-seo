import React from "react";
import sanna from "../assets/sanna.jpg";
import denny from "../assets/denny.jpg";
import antoine from "../assets/antoine.jpg";
import daria from "../assets/daria.jpg";

const AboutPanel4 = () => {
  return (
    <div id="benefits" className="aboutpanel4">
      <div>
        <main className="container  py-5">
          <h1>Our Team</h1>
          <div className="row py-5">
            <div className="col-md-4 col-sm-12 py-5">
              <div className="circle">
                <img src={sanna} loading="lazy" alt="sanna" />
                <div className="aboutpanel4-name">
                  <h2>Sanna Toropainen</h2>
                </div>
                <div className="aboutpanel4-job">
                  <h3>Co-founder, CEO</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="circle">
                <img src={denny} loading="lazy" alt="denny" />
                <div className="aboutpanel4-name">
                  <h2>Denny Wong</h2>
                </div>
                <div className="aboutpanel4-job">
                  <h3>Co-founder, CEO</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="circle">
                <img src={antoine} loading="lazy" alt="antoinet" />
                <div className="aboutpanel4-name">
                  <h2>Antoine Smolders</h2>
                </div>
                <div className="aboutpanel4-job">
                  <h3>Technical Advisor</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="circle">
                <img src={daria} loading="lazy" alt="sanna" />
                <div className="aboutpanel4-name last-name">
                  <h2>Daria Kuznetsova</h2>
                </div>
                <div className="aboutpanel4-job last-job">
                  <h3>Data Scientist</h3>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12  aboutpanel4-right ">
              <div className="discount-btn-div container">
                <button>Join our team!</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPanel4;
