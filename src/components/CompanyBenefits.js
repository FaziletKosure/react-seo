import React from "react";
import qualityicon from "../assets/qualityicon.svg";
import trancparency from "../assets/transparency.svg";
import sharing from "../assets/sharing.svg";

const CompanyBenefits = () => {
  return (
    <div id="benefits" className="benefits">
      <div>
        <div className="container  py-5">
          <div className="row py-5">
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={qualityicon} alt="qualityicon" />
                </div>
                <h2>Quality</h2>
                <p>
                  Companies improve their conversion rate by offering
                  personasation that is powered with quality data sourced
                  directly from the consumers
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={trancparency} alt="trancparency" />
                </div>
                <h2>Transparency</h2>
                <p>
                  Consumers know how and what kind of data is shared, thus
                  nothing happens without their consent.GDPR compliance
                  guaranteed.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={sharing} alt="sharing" />
                </div>
                <h2>Sharing</h2>
                <p>
                  Companies share the gains from the 300$ billion global data
                  economy with their customers.
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
