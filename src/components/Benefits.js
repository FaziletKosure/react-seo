import React from "react";
import savemoney from "../assets/savemoney.png";
import controlicon from "../assets/controlicon.png";
import transparency from "../assets/transparency.png";

const Benefits = () => {
  return (
    <div id="benefits" className="benefits">
      <div>
        <div className="container  py-5">
          <div className="row py-5">
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={savemoney} loading="lazy" alt="savemoney" />
                </div>
                <h2>Save Money</h2>
                <p>Exchange your data for discounts,gift cards or cash.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={controlicon} loading="lazy" alt="controlicon" />
                </div>
                <h2>Stay in control</h2>
                <p>Decide who you share your data with and stop anytime.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={transparency} loading="lazy" alt="transparency" />
                </div>
                <h2>Transparency</h2>
                <p>Know exactly what happens to your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
