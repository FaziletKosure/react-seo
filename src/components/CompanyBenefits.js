import React from "react";
import qualityicon from "../assets/qualityicon.svg";
import trancparency from "../assets/transparency.svg";
import sharing from "../assets/sharing.svg";

const CompanyBenefits = () => {
  return (
    <div id="benefits" className="benefits">
      <div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={qualityicon} loading="lazy" alt="qualityicon" />
                </div>
                <h2>Quality</h2>
                <p>
                  Reach customers and improve your conversion rate with
                  personalization driven by quality data sourced directly from
                  the consumers.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={trancparency} loading="lazy" alt="trancparency" />
                </div>
                <h2>Transparency</h2>
                <p>
                  Consumers know how and what kind of data is shared, thus
                  nothing happens without their consent. GDPR compliance
                  guaranteed.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={sharing} loading="lazy" alt="sharing" />
                </div>
                <h2>Sharing</h2>
                <p>
                  Reduce your cost of customer acquisition and reward your
                  customers for sharing their data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBenefits;
