import React from "react";
import equalityicon from "../assets/equalityicon.svg";
import diversity from "../assets/diversity.svg";
import trust from "../assets/trust.svg";

const AboutPanel2 = () => {
  return (
    <div id="benefits" className="benefits">
      <div>
        <div className="container  py-5">
          <div className="row py-5">
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={equalityicon} loading="lazy" alt="equalityicon" />
                </div>
                <h2>Equality</h2>
                <p>
                  We believe that everybody should have equal access to the
                  benefits of data economy.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={diversity} loading="lazy" alt="diversity" />
                </div>
                <h2>Diversity</h2>
                <p>
                  It is important that big data is representing everybody to
                  avoid algorithmic biases that harm marginalised groups.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 py-5">
              <div className="box">
                <div className="circle">
                  <img src={trust} loading="lazy" alt="trust" />
                </div>
                <h2>Trust</h2>
                <p>
                  Transparency builds trust needed as our lives become more
                  publicly available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPanel2;
